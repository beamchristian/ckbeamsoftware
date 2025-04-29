import React from "react";
import Image from "next/image"; // Import the Image component
import { FaLocationDot, FaGithub } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../components/ContactMe/ContactForm";
import Link from "next/link";

// Import the image file. Next.js handles optimization for images in the public directory.
// The path is relative to the project root, typically starting from the public directory.

async function ContactMe() {
  return (
    // Use a section element for the main contact section of the page
    // Added ARIA label for better accessibility if no h1 is present on the page
    <section
      className='bg-primary pt-[100px] pb-[80px]'
      aria-label='Contact Information and Form'
    >
      {/* Use a header element for the introductory banner/hero of this section */}
      <header className='flex flex-col items-center justify-center w-full'>
        {/*
          This div acts as the container for the Next/Image and the overlay.
          It needs relative positioning so the absolutely positioned Image and overlay
          respect its boundaries.
          Removed background image related classes.
        */}
        <div className='relative w-full h-[400px] flex flex-col items-center justify-center'>
          {/* Use Next/Image component for the background */}
          <Image
            src='/offices.jpg' // Use the imported image object
            alt='Modern office interior' // Provide descriptive alt text for accessibility
            layout='fill' // Makes the image fill the parent container
            objectFit='cover' // Covers the container while maintaining aspect ratio
            quality={100} // Optional: adjust image quality (0-100)
            className='z-0' // Ensure the image is behind the content
          />

          {/*
            This div contains the overlay and the header content.
            It needs absolute positioning to sit on top of the image and z-index to ensure stacking order.
          */}
          <div className='absolute inset-0 flex flex-col items-center justify-center bg-dark-text/70 backdrop-brightness-50 z-10'>
            {/* Use a nav element for navigation within the section (the jump link) */}
            <nav className='text-center bg-primary py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg'>
              {/* The anchor tag is appropriate for an internal page link */}
              <a href='#contact' className='cursor-pointer'>
                Contact Form
              </a>
            </nav>
            {/* Use a heading element for the main title of this section's header */}
            {/* Consider using h1 if this is the primary heading for the entire page */}
            <h2 className='recoletaBold text-5xl text-primary p-2 text-center tracking-wide mt-[10px]'>
              Hire Me
            </h2>
            {/* Removed empty div */}
          </div>
        </div>
      </header>

      {/* Use a section for the group of contact information cards */}
      {/* Added ARIA label for better accessibility */}
      <section
        className='px-5 mt-[50px] max-w-[1105px] w-full h-full mx-auto'
        aria-label='Contact Methods'
      >
        {/* This div acts as the grid container for the cards */}
        {/* Modified grid columns: sm: 2 columns, lg: 4 columns, xl: 2 columns to make cards bigger on xl */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-5'>
          {/* Use address elements for semantic contact information */}
          {/* Added not-italic class to override default browser styling for address */}
          <address
            className={`shadow-[-1px_1px_10px_0px_theme(colors.primary.light)] flex flex-col
                           justify-center items-center py-[35px] px-[35px] rounded-lg
                           cursor-pointer transition-all transform duration-300
                           hover:bg-dark-text hover:text-white hover:-translate-y-4
                           bg-white not-italic`}
          >
            {/* Div remains for flex layout of icon and label */}
            <div className='flex items-center gap-5'>
              <div>
                <FaLocationDot size={40} color='hsl(199, 82%, 38%)' />
              </div>
              {/* Div remains for flex layout of text elements */}
              <div className='flex flex-col'>
                <div className='font-semibold text-[20px] tracking-wide'>
                  <p>Location</p>
                </div>
              </div>
            </div>
            {/* Div remains for layout of the address value */}
            <div>
              <p className='text-standard-gray mt-3'>Port Charlotte, FL</p>
            </div>
          </address>

          {/* Use address elements for semantic contact information */}
          {/* Added not-italic class */}
          <address
            className={`shadow-[-1px_1px_10px_0px_theme(colors.primary.light)]
                         flex flex-col justify-center items-center py-[35px] px-[45px] rounded-lg
                         cursor-pointer transition-all transform duration-300
                         hover:bg-dark-text hover:text-white hover:-translate-y-4
                         bg-white not-italic`}
          >
            {/* Div remains for flex layout of icon and label */}
            <div className='flex items-center gap-[15px]'>
              <div>
                <FiPhoneCall size={40} color='#48AFDE' />
              </div>

              <div className='flex flex-col'>
                <div className='font-semibold text-[20px] tracking-wide'>
                  <p>Call Us On</p>
                </div>
              </div>
            </div>
            {/* Div remains for layout of the phone number */}
            <div>
              <p className='text-standard-gray mt-3'>Tel: 941-416-6424</p>
            </div>
          </address>

          {/* Use address elements for semantic contact information */}
          {/* Added not-italic class */}
          <address className='shadow-[-1px_1px_10px_0px_theme(colors.primary.light)] flex flex-col justify-center items-center py-[35px] px-[45px] rounded-lg cursor-pointer transition-all transform duration-300 hover:bg-dark-text hover:text-white hover:-translate-y-4 bg-white not-italic'>
            <div className='flex items-center gap-[15px]'>
              <div>
                <AiFillMail size={40} color='#48AFDE' />
              </div>
              <div className='flex flex-col'>
                <div className='font-semibold text-[20px] tracking-wide'>
                  <p>Email Address</p>
                </div>
              </div>
            </div>
            {/* Div remains for layout of the email address */}
            <div>
              <p className='text-standard-gray mt-3 break-words'>
                ckbeamsoftware@gmail.com
              </p>
            </div>
          </address>

          {/* The GitHub link is not strictly contact information like address/phone/email.
              Keeping it within a div inside the Link component maintains the current styling structure
              without forcing an incorrect semantic tag like address.
           */}
          <Link href='https://github.com/beamchristian'>
            {/* This div provides the card styling and flex layout */}
            <div className='shadow-[-1px_1px_10px_0px_theme(colors.primary.light)] flex flex-col py-[35px] px-[45px] rounded-lg cursor-pointer transition-all transform duration-300 hover:bg-dark-text justify-center items-center hover:text-white hover:-translate-y-4 bg-white h-full'>
              <div className='flex items-center gap-[15px]'>
                <div>
                  <FaGithub size={40} color='#48AFDE' />
                </div>
                {/* Div remains for flex layout of text elements */}
                <div className='flex flex-col'>
                  <div className='font-semibold text-[20px] tracking-wide'>
                    <p>GitHub</p>
                  </div>
                </div>
              </div>
              {/* Div remains for layout of the GitHub handle */}
              <div>
                <p className='text-standard-gray mt-3'>beamchristian</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Use a section for the contact form area */}
      {/* Added ARIA label for better accessibility */}
      <section
        id='contact' // Keep id for internal link
        className='flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px] m-auto p-10'
        aria-label='Request a Call Back Form'
      >
        {/* This div groups the heading and form content for layout purposes */}
        <div className=' flex flex-col gap-[20px]'>
          {/* This div is used for styling the "Contact Us" label/tagline */}
          <div className='text-center w-[100px] bg-red-500 py-[1px] tracking-wide uppercase font-300 font-sans text-[14px] text-white rounded-lg'>
            Contact Us
          </div>
          {/* Use a heading for the title of the form section */}
          <h3 className='text-[30px] text-primary-light'>
            Request A Call Back ! Let&apos;s discuss your needs.
          </h3>
          {/* The ContactForm component likely contains its own semantic form structure */}
          <ContactForm />
        </div>
      </section>
    </section>
  );
}

export default ContactMe;
