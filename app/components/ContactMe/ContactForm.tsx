"use client";
import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useMemo,
  FocusEvent,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Hind } from "next/font/google";

import { z, ZodIssue } from "zod"; // Zod for schema validation

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Define the Zod schema for the contact form data.
// This schema dictates the expected shape and validation rules for the form fields.
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"), // Name must be a non-empty string
  // Email must be a non-empty string and a valid email format
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone number is required"), // Phone number must be a non-empty string
  subject: z.string().min(1, "Subject is required"), // Subject must be a non-empty string
  message: z.string().min(1, "Message is required"), // Message must be a non-empty string
});

// Infer the TypeScript type directly from the Zod schema.
// This provides type safety for the form state.
type ContactFormSchemaType = z.infer<typeof contactFormSchema>;

function ContactForm() {
  // State to hold the form input values.
  const [state, setState] = useState<ContactFormSchemaType>({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  // State to manage loading state during API submission.
  const [loading, setLoading] = useState(false);

  // State to hold validation errors.
  // Using an object mapping field names to error messages allows for displaying
  // errors below specific fields. Partial<Record<...>> handles optional errors.
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormSchemaType, string>>
  >({});

  // Handle input changes for standard text/email/subject/message fields.
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = e.target.name as keyof ContactFormSchemaType;
    const value = e.target.value;

    // Update the form state for the changed field.
    setState({
      ...state,
      [key]: value,
    });

    // Clear the specific field's error when the user starts typing in it,
    // only if an error was previously displayed for this field.
    if (fieldErrors[key]) {
      setFieldErrors((prev) => {
        const newState = { ...prev };
        delete newState[key]; // Remove the error for this field
        return newState;
      });
    }
  };

  // Handle blur event for validation on field exit.
  // This validates the field when the user clicks/tabs out of it.
  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name as keyof ContactFormSchemaType;

    // Validate the entire form state using the schema.
    // We validate the whole form to catch cross-field validation errors if any exist,
    // but we only display the error for the field that was blurred.
    const validationResult = contactFormSchema.safeParse(state);

    if (!validationResult.success) {
      // If validation fails, find the specific error for the blurred field.
      const fieldError = validationResult.error.errors.find(
        (err) => err.path[0] === fieldName
      );

      if (fieldError) {
        // If an error exists for this field, set its message in the state.
        setFieldErrors((prev) => ({
          ...prev,
          [fieldName]: fieldError.message,
        }));
      } else {
        // If no error exists for this field (meaning it's now valid), remove it from state.
        setFieldErrors((prev) => {
          const newState = { ...prev };
          delete newState[fieldName];
          return newState;
        });
      }
    } else {
      // If the entire form is now valid (e.g., user corrected last field), clear all errors.
      setFieldErrors({});
    }
  };

  // Handle input changes specifically for the phone number field.
  // Includes logic to strip non-numeric characters.
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, ""); // Keep only digits

    // Update state with the cleaned numeric value.
    setState({ ...state, phoneNumber: numericValue });

    // Clear the phone number error if user types (and an error was displayed).
    if (fieldErrors.phoneNumber) {
      setFieldErrors((prev) => {
        const newState = { ...prev };
        delete newState.phoneNumber; // Remove the phone number error
        return newState;
      });
    }
  };

  // Reset the form state and clear all errors.
  const clearState = () => {
    setState({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
    setFieldErrors({}); // Clear validation errors
  };

  // Handle form submission.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default browser form submission (page reload).

    // Validate the form state one final time before attempting API submission.
    const validationResult = contactFormSchema.safeParse(state);

    if (!validationResult.success) {
      // If validation fails on submit, log errors and update the fieldErrors state
      // with all errors from the validation result.
      console.error("Validation Failed:", validationResult.error.errors);

      const newErrors: Partial<Record<keyof ContactFormSchemaType, string>> =
        {};
      validationResult.error.errors.forEach((err) => {
        // Assuming path is always [fieldName] for simplicity in this schema
        if (err.path.length > 0) {
          newErrors[err.path[0] as keyof ContactFormSchemaType] = err.message;
        }
      });
      setFieldErrors(newErrors); // Set all errors found on submit

      toast.error("Please fix the errors in the form."); // Show a general error toast
      return; // Stop the function execution if validation fails.
    }

    // If validation succeeds, clear any errors from previous attempts
    // and proceed with the API call.
    setFieldErrors({});
    setLoading(true); // Set loading state to true

    const data = validationResult.data; // Use the validated data for submission.

    try {
      // Perform the API request.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();

      // Check if the response was successful (HTTP status 2xx and no specific API error).
      if (res.ok && !response.error) {
        clearState(); // Clear form and errors on success.
        toast.success(response.message || "Message sent successfully!"); // Show success toast.
      } else {
        // Handle API-specific errors (e.g., validation failed on server, database error).
        // Note: Server-side validation should ideally mirror client-side for security.
        clearState(); // Optionally clear state on API error, depending on desired UX.
        toast.error(
          response.message || "Something went wrong sending the message."
        ); // Show error toast.
      }
    } catch (error) {
      // Handle network errors or unexpected issues during fetch.
      console.error("Fetch error:", error);
      clearState(); // Optionally clear state on fetch error.
      toast.error("An unexpected error occurred. Please try again."); // Show error toast.
    } finally {
      // Ensure loading state is set to false after fetch completes,
      // regardless of success or failure.
      setLoading(false);
    }
  };

  // Use useMemo to efficiently determine if the entire form state is currently valid.
  // This result is used to enable/disable the submit button.
  const isFormValid = useMemo(() => {
    // Running safeParse on the current state
    const result = contactFormSchema.safeParse(state);
    // The form is valid if the parsing operation succeeds.
    return result.success;
  }, [state]); // Recalculate only when the form state changes.

  return (
    // Form element with the submit handler.
    <form className=' flex flex-col gap-[20px]' onSubmit={handleSubmit}>
      {/* Flex container for name and email inputs */}
      <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}>
        {/* Name input group */}
        <div className='flex-1'>
          <input
            type='text'
            name='name'
            placeholder='Your Name..'
            onChange={handleChange} // Handle text input changes
            onBlur={handleBlur} // Validate on blur
            value={state.name} // Controlled component value
            // Apply conditional border styling based on whether there's an error for 'name'
            className={`px-[12px] outline-none rounded-md py-[12px] w-full bg-gray-200 ${
              fieldErrors.name ? "border border-red-500" : ""
            }`}
          />
          {/* Conditionally display the error message for 'name' if it exists in fieldErrors */}
          {/* Styled with Tailwind classes for blue text, white background, padding, rounded corners */}
          {fieldErrors.name && (
            <p className='text-primary bg-primary-light p-2 rounded mt-1 text-sm'>
              {fieldErrors.name}
            </p>
          )}
        </div>
        {/* Email input group */}
        <div className='flex-1'>
          <input
            type='email' // Semantic type for email input
            name='email'
            placeholder='Your Email..'
            onChange={handleChange} // Handle text input changes
            onBlur={handleBlur} // Validate on blur
            value={state.email} // Controlled component value
            // Apply conditional border styling based on whether there's an error for 'email'
            className={`px-[12px] outline-none rounded-md py-[12px] w-full bg-gray-200 ${
              fieldErrors.email ? "border border-red-500" : ""
            }`}
          />
          {/* Conditionally display the error message for 'email' */}
          {fieldErrors.email && (
            <p className='text-primary bg-primary-light p-2 rounded mt-1 text-sm'>
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Flex container for phone and subject inputs */}
      <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}>
        {/* Phone number input group */}
        <div className='flex-1'>
          <input
            type='text' // Using text type to allow input mask/cleaning in handlePhoneChange
            name='phoneNumber'
            placeholder='Your Phone Number...'
            onChange={handlePhoneChange} // Handle phone number specific changes
            onBlur={handleBlur} // Validate on blur
            value={state.phoneNumber} // Controlled component value
            // Apply conditional border styling based on error
            className={`px-[12px] outline-none rounded-md py-[12px] w-full bg-gray-200 ${
              fieldErrors.phoneNumber ? "border border-red-500" : ""
            }`}
          />
          {/* Conditionally display the error message for 'phoneNumber' */}
          {fieldErrors.phoneNumber && (
            <p className='text-primary bg-primary-light p-2 rounded mt-1 text-sm'>
              {fieldErrors.phoneNumber}
            </p>
          )}
        </div>
        {/* Subject input group */}
        <div className='flex-1'>
          <input
            type='text'
            name='subject'
            placeholder='Your Subject..'
            onChange={handleChange} // Handle text input changes
            onBlur={handleBlur} // Validate on blur
            value={state.subject} // Controlled component value
            // Apply conditional border styling based on error
            className={`px-[12px] outline-none rounded-md py-[12px] w-full bg-gray-200 ${
              fieldErrors.subject ? "border border-red-500" : ""
            }`}
          />
          {/* Conditionally display the error message for 'subject' */}
          {fieldErrors.subject && (
            <p className='text-primary bg-primary-light p-2 rounded mt-1 text-sm'>
              {fieldErrors.subject}
            </p>
          )}
        </div>
      </div>

      {/* Message textarea group */}
      <div className={`${hind.className}`}>
        <div className='flex-1'>
          <textarea
            name='message'
            placeholder='Your Message..'
            onChange={handleChange} // Handle textarea changes
            onBlur={handleBlur} // Validate on blur
            value={state.message} // Controlled component value
            // Apply conditional border styling based on error
            className={`px-[12px] outline-none h-[180px] w-full rounded-md py-[12px] bg-gray-200 ${
              fieldErrors.message ? "border border-red-500" : ""
            }`}
          />
          {/* Conditionally display the error message for 'message' */}
          {fieldErrors.message && (
            <p className='text-primary bg-primary-light p-2 rounded mt-1 text-sm'>
              {fieldErrors.message}
            </p>
          )}
        </div>
      </div>

      {/* Submission section */}
      <div>
        {/* Loading spinner */}
        {loading && (
          <div className='mb-3 text-center ml-5 w-6 h-6 border-t-2 border-blue-600 border-solid animate-spin rounded-full'></div>
        )}
        {/* Submit button */}
        <button
          className='bg-dark-text w-full sm:w-auto px-[30px] py-[12px] hover:bg-primary-light hover:text-dark-text transition-colors duration-300 font-semibold rounded-lg text-primary-light disabled:opacity-50 disabled:cursor-not-allowed'
          type='submit' // Explicitly set type to submit
          // Button is disabled if currently loading OR if the form state is not valid as determined by useMemo
          disabled={loading || !isFormValid}
        >
          Send Us A Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
