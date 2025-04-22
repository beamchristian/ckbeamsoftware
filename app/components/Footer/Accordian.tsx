"use client";
import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";

interface AccordianProps {
  title: string;
  content: string[];
}

function Accordian({ title, content }: AccordianProps) {
  const [isOpen, setIsoOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const toggleAccordina = () => {
    setIsoOpen(!isOpen);
  };
  return (
    <div className='border-b border-dark-gray mb-4'>
      <div
        className='flex justify-between items-center p-2 sm:p-4 w-full bg-dark-gray'
        onClick={toggleAccordina}
      >
        <h2 className='text-2xl text-white font-semibold'>{title}</h2>
        <div className='bg-dark-gray h-8 w-8 flex justify-center items-center rounded-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={`w-6 h-6 text-white ${isOpen ? "" : "-rotate-90"}`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
          </svg>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter='transition duration-200 ease-in'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition duration-200 ease-out'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        {() => (
          <div ref={divRef} className='p-4 bg-dark-gray'>
            {content.map((item) => (
              <p key={item} className='py-1 text-gray-400 font-sans'>
                {item}
              </p>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
}

export default Accordian;
