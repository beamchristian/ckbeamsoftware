import React from "react";
import Image from "next/image"; // Import the Image component
import { FaLocationDot, FaGithub } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../components/ContactMe/ContactForm";
import Link from "next/link";

async function ContactMe() {
  return (
    <section
      className='bg-primary pt-[100px] pb-[80px]'
      aria-label='Contact Information and Form'
    >
      <header className='flex flex-col items-center justify-center w-full'>
        <div className='relative w-full h-[400px] flex flex-col items-center justify-center'>
          <Image
            src='/offices.jpg'
            alt='Modern office interior'
            layout='fill'
            objectFit='cover'
            quality={100}
            className='z-0'
          />

          <div className='absolute inset-0 flex flex-col items-center justify-center bg-dark-text/70 backdrop-brightness-50 z-10'>
            {/* Use a nav element for navigation within the section (the jump link) */}
            <nav className='text-center bg-primary py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg'>
              {/* The anchor tag is appropriate for an internal page link */}
              <a href='#contact' className='cursor-pointer'>
                Contact Form
              </a>
            </nav>
            <h2 className='recoletaBold text-5xl text-primary p-2 text-center tracking-wide mt-[10px]'>
              Hire Me
            </h2>
          </div>
        </div>
      </header>

      <section
        className='px-5 mt-[50px] max-w-[1105px] w-full h-full mx-auto'
        aria-label='Contact Methods'
      >
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-5'>
          <address
            className={`shadow-[-1px_1px_10px_0px_theme(colors.primary.light)] flex flex-col
                           justify-center items-center py-[35px] px-[35px] rounded-lg
                           cursor-pointer transition-all transform duration-300
                           hover:bg-dark-text hover:text-white hover:-translate-y-4
                           bg-white not-italic`}
          >
            <div className='flex items-center gap-5'>
              <div>
                <FaLocationDot size={40} color='hsl(199, 82%, 38%)' />
              </div>

              <div className='flex flex-col'>
                <div className='font-semibold text-[20px] tracking-wide'>
                  <p>Location</p>
                </div>
              </div>
            </div>

            <div>
              <p className='text-standard-gray mt-3'>Port Charlotte, FL</p>
            </div>
          </address>

          <address
            className={`shadow-[-1px_1px_10px_0px_theme(colors.primary.light)]
                         flex flex-col justify-center items-center py-[35px] px-[45px] rounded-lg
                         cursor-pointer transition-all transform duration-300
                         hover:bg-dark-text hover:text-white hover:-translate-y-4
                         bg-white not-italic`}
          >
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
            <div>
              <p className='text-standard-gray mt-3'>Tel: 941-416-6424</p>
            </div>
          </address>
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
            <div>
              <p className='text-standard-gray mt-3 break-words'>
                ckbeamsoftware@gmail.com
              </p>
            </div>
          </address>

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
      <section
        id='contact'
        className='flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px] m-auto p-10'
        aria-label='Request a Call Back Form'
      >
        <div className=' flex flex-col gap-[20px]'>
          <div className='text-center w-[100px] bg-red-500 py-[1px] tracking-wide uppercase font-300 font-sans text-[14px] text-white rounded-lg'>
            Contact Us
          </div>
          <h3 className='text-[30px] text-primary-light'>
            Request A Call Back ! Let&apos;s discuss your needs.
          </h3>
          <ContactForm />
        </div>
      </section>
    </section>
  );
}

export default ContactMe;
