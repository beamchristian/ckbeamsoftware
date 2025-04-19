"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Hind } from "next/font/google";
import { TestimonialSettings } from "@/utils/variables";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Testimonial() {
  return (
    <div id='testimonial '>
      <div className='bg-[linear-gradient(-62deg,#EEF7FB_0%_50%,#EEF7FB_0%_100%)] max-h-[450px] py-12 lg:px-12 md:px-5 px-3 rounded-lg hidden md:block '>
        <div className='lg:container mx-auto   px-0 sm:max-h-[350px]'>
          <div className='text-center'>
            <h2 className='font-extrabold text-5xl mb-6 text-[#48AEDD]'>
              What our customers Are Saying
            </h2>
            <p
              className={`max-w-2xl font-[200] font-recoletaBold mx-auto mb-12 lg:mb-24 `}
            >
              Client are always pleased with my work.....
            </p>
          </div>
          <Slider {...TestimonialSettings} className='cursor-all-scroll'>
            <div className='slider-card flex' style={{ paddingLeft: "0px" }}>
              <div
                className=' bg-white swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px]  swiper-slide-active'
                style={{
                  backgroundImage:
                    "linear-gradient(5deg, #48AFDE 0 10%, white 0% 10%)",
                }}
              >
                <div className=' flex'>
                  <div className='min-w-[100px]'>
                    <Image
                      height={25}
                      width={25}
                      className='mb-3 md:mb-0  h-20 w-20 rounded-full'
                      src=''
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col gap-x-4 md:flex-col mb:items-center'>
                    <div className='font-medium text-base'>Customer 1</div>
                    <div
                      className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                    >
                      Customer
                    </div>
                    <p
                      className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                    >
                      Some Review
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='slider-card flex' style={{ paddingLeft: "0px" }}>
              <div
                className='swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5 rounded-2xl p-4 lg:p-6 min-h-[250px]swiper-slide-active'
                style={{
                  backgroundImage:
                    "linear-gradient(5deg, #48AFDE 0 10%, white 0% 90%)",
                }}
              >
                <div className=' flex'>
                  <div className='min-w-[100px]'>
                    <Image
                      height={25}
                      width={25}
                      className='mb-3 md:mb-0  h-20 w-20 rounded-full'
                      src=''
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col gap-x-4 md:flex-col mb:items-center'>
                    <div className='font-medium text-base'>Client 2</div>
                    <div
                      className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                    >
                      Client
                    </div>
                    <p
                      className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                    >
                      Some Review
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='slider-card flex' style={{ paddingLeft: "0px" }}>
              <div
                className='swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px] bg-white swiper-slide-active'
                style={{
                  backgroundImage:
                    "linear-gradient(5deg, #48AFDE 0 10%, white 0% 100%)",
                }}
              >
                <div className=' flex'>
                  <div className='min-w-[100px]'>
                    <Image
                      height={25}
                      width={25}
                      className='mb-3 md:mb-0  h-20 w-20 rounded-full'
                      src=''
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col gap-x-4 md:flex-col mb:items-center'>
                    <div className='font-medium text-base'>Client 3</div>
                    <div
                      className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                    >
                      Some Client
                    </div>
                    <p
                      className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                    >
                      Some review
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='slider-card flex' style={{ paddingLeft: "0px" }}>
              <div
                className='swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px] bg-white swiper-slide-active'
                style={{
                  backgroundImage:
                    "linear-gradient(5deg, #48AFDE 0 10%, white 0% 100%)",
                }}
              >
                <div className=' flex'>
                  <div className='min-w-[100px]'>
                    <Image
                      height={25}
                      width={25}
                      className='mb-3 md:mb-0  h-20 w-20 rounded-full'
                      src=''
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col gap-x-4 md:flex-col mb:items-center'>
                    <div className='font-medium text-base'>Client 4</div>
                    <div
                      className={`font-[300] ${hind.className} font-medium text-[#48AEDD]`}
                    >
                      Some Client
                    </div>
                    <p
                      className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                    >
                      Some review
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='slider-card flex' style={{ paddingLeft: "0px" }}>
              <div
                className='swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto   rounded-2xl p-4 lg:p-6 min-h-[250px] bg-white swiper-slide-active'
                style={{
                  backgroundImage:
                    "linear-gradient(4deg, #48AFDE 0 10%, white 0% 100%)",
                }}
              >
                <div className=' flex'>
                  <div className='min-w-[100px]'>
                    <Image
                      height={25}
                      width={25}
                      className='mb-3 md:mb-0  h-20 w-20 rounded-full'
                      src=''
                      alt='/'
                    />
                  </div>
                  <div className='flex flex-col gap-x-4 md:flex-col mb:items-center'>
                    <div className='font-medium text-base'>Client 5</div>
                    <div
                      className={`font-[500] ${hind.className} font-medium text-[#48AEDD]`}
                    >
                      Client
                    </div>
                    <p
                      className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                    >
                      Some Review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
