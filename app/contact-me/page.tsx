import React from "react";
import { FaLocationDot, FaGithub } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";
import { Hind } from "next/font/google";
import { ToastClassName, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../components/ContactMe/ContactForm";
import Link from "next/link";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

async function ContactMe() {
  return (
    <>
      <ToastContainer />
      <div className='flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4'>
        <div className='flex flex-col items-center justify-center bg-[url("/offices.jpg")] bg-cover bg-center w-full h-[400px]'>
          <div className='flex flex-col items-center justify-center  w-full h-full bg-dark-text/70 backdrop-brightness-50'>
            <div className='text-center bg-[#48AFDE] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg'>
              <a href='#contact' className='cursor-pointer'>
                Contact Form
              </a>
            </div>
            <div className='mt-[10px]'>
              <h1 className='recoletaBold text-5xl text-[#48AFDE] p-2 text-center tracking-wide'>
                Hire Me
              </h1>
            </div>
            <div className='flex justify-center text-center mt-[10px] md:w-[700px] '>
              <p className='text-white font-[300] text-cener text-xl'>
                Some text
              </p>
            </div>
          </div>
        </div>

        <div className='px-[20px]'>
          <div className='sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full'>
            <div className='flex flex-col flex-1 xl:flex-row gap-[20px]'>
              <div
                className='flex flex-col justify-center py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-dark-text hover:text-white hover:-translate-y-4 bg-white'
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className='flex items-center gap-[15px]'>
                  <div>
                    <FaLocationDot size={40} color='#48AFDE' />
                  </div>

                  <div className='flex flex-col'>
                    <div className='font-semibold text-[20px] tracking-wide'>
                      <p>Location</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className='text-[#666666] mt-3'>Port Charlotte, FL</p>
                </div>
              </div>

              <div
                className='flex flex-col justify-center py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-dark-text hover:text-white hover:-translate-y-4 bg-white'
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
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
                  <p className='text-[#666666] mt-3'>Tel: 941-416-6424</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col flex-1 xl:flex-row gap-[20px]'>
              <div
                className='flex flex-col justify-center py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-dark-text hover:text-white hover:-translate-y-4 bg-white'
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
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
                  <p className='text-[#666666] mt-3'>
                    ckbeamsoftware@gmail.com
                  </p>
                </div>
              </div>
              <Link href='https://github.com/beamchristian'>
                <div
                  className='flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-dark-text hover:text-white hover:-translate-y-4 bg-white'
                  style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
                >
                  <div className='flex items-center gap-[15px]'>
                    <div>
                      <FaGithub size={40} color='#48AFDE' />
                    </div>

                    <div className='flex flex-col'>
                      <div className='font-semibold text-[20px] tracking-wide'>
                        <p>GitHub</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className='text-[#666666] mt-3'>beamchristian</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        id='contact'
        className='flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px] m-auto p-10 mb-[-100px]'
      >
        <div className='flex flex-col gap-[20px]'>
          <div className='text-center w-[100px] bg-red-500 py-[1px] tracking-wide uppercase font-300 font-sans text-[14px] text-white rounded-lg'>
            Contact Us
          </div>
          <div className=''>
            <p className='text-[30px] text-[#48AFDE]'>
              {" "}
              Request A Call Back ! Feel Free To Reach & Contact Us.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactMe;
