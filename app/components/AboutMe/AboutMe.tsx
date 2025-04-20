"use client";
import React, { useState } from "react";
import { Hind } from "next/font/google";
import { AboutData } from "@/app/data";
import Image from "next/image";
import "./AboutMe.css";
import { AboutDataType } from "@/Types/Types";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function AboutMe() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mapData, setMapData] = useState(AboutData[0]);

  const myFunctions = (data: AboutDataType) => {
    setIsFlipped(false);
    setIsFaded(false);
    setMapData(data);
  };

  const handleCardClick = (data: AboutDataType, index: number) => {
    setIsFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);

    setTimeout(() => myFunctions(data), 600);
  };

  const HandleNext = () => {
    if (selectedIndex < 3) {
      handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
    } else {
      handleCardClick(AboutData[0], 0);
    }
  };

  const HandlePrev = () => {
    if (selectedIndex !== 0) {
      handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
    } else {
      handleCardClick(AboutData[AboutData.length - 1], AboutData.length - 1);
    }
  };

  return (
    <>
      <div
        id='about-me-component'
        className=' bg-gradient-to-b from-brand-light to-light-bg pt-[160px] md:pt-[260px] pb-[100px] lg:pb-[700px] relative lg:h-[800px]'
      >
        <div className='container m-auto'>
          <h1
            className={`pt-8 text-[4rem] md:text-[6rem] lg:text-[8rem] pl-[5%] w-[80%] overflow-hidden 
                        absolute top-1 text-[#EAF7FC]`}
          >
            About Me
          </h1>
          <h1 className='relative font-recoletaBlack text-3xl lg:text-5xl mt-[-2rem] text-brand-light mb-5 md:px-24 px-5'>
            About My Self
          </h1>
          <h4 className='relative w-full font-[300] md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-dark-text text-2xl mb-10 px-5 md:px-24'>
            Full Stack Developer
          </h4>
          <section className='relative flex flex-col lg:flex-row px-5 md:px-24 text-xl'>
            <p
              className={`w-full lg:w-1/3 text-dark-text mr-0 mb-5 lg:mr-4 font-[200] ${hind.className}`}
            >
              Building robust, scalable applications is something I genuinely
              enjoy. Working under ckbeamsoftware, I blend creative thinking
              with solid technical skills to take projects from that initial
              idea all the way through to deployment.
            </p>
            <p
              className={`w-full lg:w-1/3 text-dark-text mr-0 mb-5 lg:mr-4 font-[200] ${hind.className}`}
            >
              What keeps me hooked on software development is a constant
              curiosity and the drive to really understand and master the tools
              shaping our digital world. I get a real kick out of taking on
              complex problems and finding elegant, working solutions.
            </p>
            <p
              className={`w-full lg:w-1/3 text-dark-text mr-0 mb-10 lg:mr-4 font-[200] ${hind.className}`}
            >
              My focus is on the full stack – creating user experiences that
              feel intuitive and seamless, backed by powerful, harmoniously
              built systems on the back end. Always looking for the next
              interesting project, let's connect!
            </p>
          </section>
        </div>
      </div>

      <div className='lg:-mt-60 bg-gradient-to-t from-brand-light to-light-bg'>
        <section className='container flex flex-col m-auto sm:flex-row px-5 md:px-24 mt-[50px] sm:mt-0 transform translate-y-[-100px]'>
          <div className=' hidden sm:flex w-full sm:w-1/2 lg:w-7/12'>
            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mr-0 lg:mr-10'>
              {AboutData.map((item, index) => (
                <a
                  key={index}
                  onClick={() => handleCardClick(item, index)}
                  className={`shadow-[-5px_10px_20px_0px_theme(colors.brand.light)] relative cursor-pointer transition-all transform duration-300 group rounded-xl center p-6 lg:p-10 flex flex-col justify-center  items-center ${
                    selectedIndex == index
                      ? " -translate-y-2 bg-dark-bg"
                      : "hover:bg-dark-bg hover:shadow-xl hover:-translate-y-2 bg-white"
                  }`}
                >
                  <div className='w-16 h-16 sm:w-10 sm:h-10 lg:w-16 lg:h-16'>
                    <Image
                      height={100}
                      width={100}
                      src={item.img}
                      alt='internet issues'
                    />
                  </div>
                  <h4
                    className={`text-center text-sm lg:text-xl font-recoletaBold transition-colors duration-500 group-hover:text-white text-dark-text-2 mt-3 ${
                      selectedIndex === index ? "text-white" : ""
                    }`}
                  >
                    {item.title}
                  </h4>

                  <div
                    className={`absolute -top-2 -right-2 transform transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-xl w-12 h-12 rounded-lg bg-dark-bg flex justify-center items-center font-bold text-white font-recoletaBold text-xl  ${
                      selectedIndex === index
                        ? "opacity-100 rotate-12"
                        : "group-hover:rotate-12"
                    }`}
                  >
                    {item.count}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-5/12 overflow-visible px-0 sm:pl-6 xl:px-10'>
            <div className='bg-white lg:mt-0 mt-10 rounded-xl p-10 xl:p-12 shadow-accent-color relative'>
              <section
                className={`fade-left overflow-hidden ${
                  isFaded ? "fade-out" : ""
                }`}
              >
                <h2 className='font-recoletaBold text-dark-text-2 text-3xl md:text-[1.5rem] mb-6 w-44 md:w-65 transition duration-500 transform opacity-100'>
                  {mapData?.title}
                </h2>

                <ul
                  className={`${hind.className} font-[300] list-disc text-dark-text-2 ml-8 lg:ml-10 text-base lg:text-lg transition duration-500 transform  opacity-100 undefined undefined`}
                >
                  {mapData?.array?.map((obj) => (
                    <li key={obj} className='mb-2'>
                      {obj}
                    </li>
                  ))}
                </ul>
              </section>
              <div
                className={`absolute perspective-500 -top-7 sm:top-30 right-0 sm:-right-20 card ${
                  isFlipped ? "flipped" : ""
                }`}
              >
                <div className='card-inner'>
                  <div className='rounded-2xl cursor-pointer  text-7xl  xl:text-9xl font-recoletaBlack text-white bg-dark-text-2 p-5 xl:p-8 w-28 h-28 xl:w-48 xl:h-48  transform transition duration-500 transform-preserve -rotate-6 transform-preserve'>
                    <span className='text-2xl xl:text-6xl mr-2 sm:mr-3'>*</span>
                    {mapData.count}
                  </div>
                </div>
              </div>

              <div className='absolute right-10 -bottom-5 flex'>
                <a
                  onClick={HandlePrev}
                  className='w-12 h-12 rounded-xl mr-1 transform transition duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-dark-text-2'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    aria-hidden='true'
                    className='w-6 h-6 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 19l-7-7 7-7'
                    ></path>
                  </svg>
                </a>
                <a
                  onClick={HandleNext}
                  className='w-12 h-12 rounded-xl mr-1 transform transition duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-dark-text-2'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    aria-hidden='true'
                    className='w-6 h-6 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 5l7 7-7 7'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
