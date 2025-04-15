"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Hind } from "next/font/google";
import { ContactFormDataType } from "@/Types/Types";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function ContactForm() {
  const [state, setState] = useState<ContactFormDataType>({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = e.target.name;
    const value = e.target.value;
    console.log(`key: ${key}, value: ${value}`);
    setState({
      ...state,
      [key]: value,
    });
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setState({ ...state, phoneNumber: numericValue });
  };

  const clearState = () => {
    setState({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  // Type 'e' as a FormEvent targeting the Form element
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    const data = {
      ...state,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();

      if (res.ok && !response.error) {
        // Check if the fetch itself was successful (status 2xx)
        clearState();
        toast.success(response.message || "Message sent successfully!"); // Use toast.success for success
      } else {
        // Handle specific API errors or fallback
        clearState();
        toast.error(
          response.message || "Something went wrong sending the message."
        ); // Use toast.error for errors
      }
    } catch (error) {
      console.error("Fetch error:", error); // Log the actual error
      clearState();
      toast.error("An unexpected error occurred. Please try again."); // Use toast.error for errors
    } finally {
      setLoading(false); // Ensure loading is set to false whether success or error
    }
  };

  return (
    <form className='flex flex-col gap-[20px]' onSubmit={handleSubmit}>
      <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}>
        <input
          type='text'
          name='name'
          placeholder='Your Name..'
          required
          onChange={handleChange}
          value={state.name}
          className='px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200'
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email..'
          required
          onChange={handleChange}
          value={state.email}
          className='px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200'
        />
      </div>
      <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}>
        <input
          type='text'
          name='phoneNumber'
          placeholder='Your Phone Number...'
          required
          onChange={handlePhoneChange}
          value={state.phoneNumber}
          className='px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200'
        />
        <input
          type='text'
          name='subject'
          placeholder='Your Subject..'
          required
          onChange={handleChange}
          value={state.subject}
          className='px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200'
        />
      </div>
      <div className={`${hind.className}`}>
        <textarea
          required
          name='message'
          placeholder='Your Message..'
          onChange={handleChange}
          value={state.message}
          className='px-[12px] outline-none h-[180px] w-full rounded-md py-[12px] flex-1 bg-gray-200'
        />
      </div>
      <div>
        {loading && (
          <div className='mb-3 text-center ml-5 w-6 h-6 border-t-2 border-blue-600 border-solid animate-spin rounded-full'></div>
        )}
        <button className='bg-[#48AFDE] w-full sm:w-auto px-[30px] py-[12px] hover:bg-dark-text transition-colors duration-300 font-semibold rounded-lg text-white'>
          Send Us A Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
