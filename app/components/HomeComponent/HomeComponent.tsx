"use client";
import React from "react";
import { Hind } from "next/font/google";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselSettings } from "@/utils/variables";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function HomeComponent() {
  return (
    <>
      <div
        id='home'
        className='bg-gradient-to-b from-brand-light to-light-bg min-h-[500px] max-h-[1200px] w-full h-full'
      >
        <div className='container m-auto'>
          <div className='grid grid-cols-12'>
            <div className='bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent'>
              <div className='container m-auto'>
                <div className='lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center'>
                  <p
                    className={`text-brand text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hi There!
                  </p>
                  <h1
                    className={`text-dark-text font-recoletaBlack text-5xl md:text-5xl 
                      lg:text-7xl xl:text-7xl mt-5 md:mt-3`}
                  >
                    I&apos;m Christian
                  </h1>
                  <h2
                    className={`text-dark-text py-2 font-bold uppercase md:text-xl ${hind.className}`}
                  >
                    Full-Stack Developer | ckbeamsoftware
                  </h2>
                  <Link
                    href='/#portfolio'
                    className={`cursor-pointer inline-block bg-brand transition-all duration-300 
                                ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase 
                                md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 
                                hover:bg-dark-text hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    Projects
                  </Link>
                  <a
                    href='CHRISTIAN_BEAM_Resume.pdf'
                    download='CHRISTIAN_BEAM_Resume.pdf'
                    className={`ml-10 cursor-pointer inline-block bg-dark-text transition-all duration-300 
                                ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase 
                                md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-brand 
                                hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`col-span-12 pt-[50px] md:bg-transparent bg-light-bg-alt md:pt-[130px]
                md:col-span-7`}
            >
              <div className='container m-auto'>
                <Image
                  src='/Christian_Portrait.png'
                  decoding='async'
                  data-nimg='intrinsic'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='lg:w-1/2 w-full'
                  alt='profile pics'
                />
              </div>
            </div>
          </div>
          <div className='container m-auto absolute'>
            <div className='px-3'>
              <div
                className={`relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl 
                            px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-2xl
                            z-20`}
                style={{
                  boxShadow: "rgba(72, 175, 222, 0.5) -10px 25px 50px 10px",
                }}
              >
                <div className={`lg:py-10 md:py-6 sm:py-6 cursor-all-scroll`}>
                  <Slider {...carouselSettings}>
                    <Image
                      height={8}
                      width={50}
                      src='/slider-assets/python-logo.png'
                      sizes='100vw'
                      alt=''
                      className='h-12 cursor-pointer mt-1.5'
                    />
                    <Image
                      height={8}
                      width={50}
                      src='/expressjs.png'
                      sizes='100vw'
                      alt=''
                      className='h-12 cursor-pointer '
                    />
                    <Image
                      height={8}
                      width={50}
                      src='/reactjs.png'
                      sizes='100vw'
                      alt=''
                      className='h-12 cursor-pointer  '
                    />
                    <Image
                      height={8}
                      width={50}
                      src='/nextjs.png'
                      sizes='100vw'
                      alt=''
                      className='h-12 cursor-pointer '
                    />
                    <Image
                      height={8}
                      width={50}
                      src='/docker.png'
                      sizes='100vw'
                      alt=''
                      className='h-12 cursor-pointer '
                    />
                    <Image
                      height={8}
                      width={50}
                      src='/expressjs.png'
                      sizes='100vw'
                      alt=''
                      className='h-12 cursor-pointer '
                    />
                    <Image
                      height={8}
                      width={50}
                      src='/nodejs.png'
                      sizes='100vw'
                      alt=''
                      className='h-12 cursor-pointer '
                    />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
