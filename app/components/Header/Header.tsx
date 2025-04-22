"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Drawer from "./DiagonalDrawer";
import "../Header/DiagonalDrawer.css";

function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedIndex1={selectedIndex1}
          setSelectedIndex1={setSelectedIndex1}
        />
      </div>
      <header
        className={`${
          isScrolled ? "headerShow" : ""
        }  w-full fixed top-0 z-50 transition-all duration-500`}
      >
        <div className='relative'>
          <div
            onClick={openDrawer}
            className={`z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 
                      bg-dark-text flex justify-center items-center rounded-br-3xl`}
          >
            <div className='relative w-9 lg:w-[4rem] h-9 lg:h-[4rem] flex justify-center items-center'>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                viewBox='0 0 98 78'
              >
                <path
                  className='fill-dark-text'
                  d='M63,79 C42.03,79 21.56,79 1.04,79 C1.04,53.07 1.04,27.13 1.04,1 C17.24,1 33.49,1 49.73,1 C66.04,1 82.35,1 98.83,1 C98.83,27 98.83,53 98.83,79 C87.13,79 75.32,79 63,79 M63.5,59 C47.86,59 32.23,59.02 16.59,58.99 C13.6,58.98 10.7,59.8 11.33,63.18 C11.62,64.72 14.71,66.81 16.54,66.83 C39.5,67.08 62.45,66.99 85.41,67.01 C88.4,67.01 91.3,66.2 90.67,62.82 C90.38,61.28 87.34,59.29 85.45,59.18 C78.49,58.74 71.49,59 63.5,59 M12.07,41.62 C13.11,42.07 14.15,42.91 15.19,42.92 C33.67,43 52.15,43.07 70.63,42.81 C72.08,42.79 73.5,40.36 74.93,39.04 C73.36,37.7 71.81,35.21 70.22,35.19 C52.08,34.91 33.93,34.96 15.78,35.05 C12.03,35.07 10.24,37.02 12.07,41.62 M43.5,19 C49.48,19 55.49,19.3 61.44,18.83 C63.35,18.67 66.38,16.73 66.67,15.19 C67.31,11.82 64.43,10.98 61.43,10.99 C46.47,11.02 31.51,10.87 16.55,11.17 C14.7,11.2 11.63,13.27 11.33,14.81 C10.69,18.18 13.57,19.02 16.57,19.01 C25.21,18.98 33.86,19 43.5,19 z'
                />
                <path
                  fill='#FEFFFF'
                  d='M64,59 C71.49,59 78.49,58.74 85.45,59.18 C87.34,59.29 90.38,61.28 90.67,62.82 C91.3,66.2 88.4,67.01 85.41,67.01 C62.45,66.99 39.5,67.08 16.54,66.83 C14.71,66.81 11.62,64.72 11.33,63.18 C10.7,59.8 13.6,58.98 16.59,58.99 C32.23,59.02 47.86,59 64,59 z'
                />
                <path
                  fill='#FEFFFF'
                  d='M11.84,41.28 C10.24,37.02 12.03,35.07 15.78,35.05 C33.93,34.96 52.08,34.91 70.22,35.19 C71.81,35.21 73.36,37.7 74.93,39.04 C73.5,40.35 72.08,42.79 70.63,42.81 C52.15,43.07 33.67,43 15.19,42.92 C14.15,42.91 13.11,42.07 11.84,41.28 z'
                />
                <path
                  fill='#FEFFFF'
                  d='M43,19 C33.86,19 25.21,18.98 16.57,19.01 C13.57,19.02 10.69,18.18 11.33,14.81 C11.63,13.27 14.7,11.2 16.55,11.17 C31.51,10.87 46.47,11.02 61.43,10.99 C64.43,10.98 67.31,11.82 66.67,15.19 C66.38,16.73 63.35,18.67 61.44,18.83 C55.49,19.3 49.48,19 43,19 z'
                />
              </svg>
            </div>
          </div>
        </div>
        <nav
          className={`invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto`}
        >
          <ul className={`flex font-recoletaBlack flex-row items-center h-24`}>
            {/* Start of Home Link*/}
            <li className={`group text-2xl relative font-bold mr-20`}>
              {selectedIndex1 === 0 ? (
                <span
                  className={`menu-effect transform opacity-100 -rotate-12 
                                    group-hover:-rotate-12 group-hover:opacity-100`}
                ></span>
              ) : (
                <span
                  className={`menu-effect transform opacity-0 rotate-12 
                                    group-hover:-rotate-12 group-hover:opacity-100`}
                ></span>
              )}
              <Link
                className={`menu-item ${
                  selectedIndex1 === 0 ? "text-black" : ""
                } text-primary-light group-hover:text-black`}
                href='/#home'
                onClick={() => setSelectedIndex1(0)}
              >
                Home
              </Link>
            </li>
            {/* End of Home Link */}
            {/* Start of Portfolio Link*/}
            <li className={`group text-2xl relative font-bold mr-20`}>
              {selectedIndex1 === 1 ? (
                <span
                  className={`menu-effect transform opacity-100 -rotate-12 
                                    group-hover:-rotate-12 group-hover:opacity-100`}
                ></span>
              ) : (
                <span
                  className={`menu-effect transform opacity-0 rotate-12 
                                    group-hover:-rotate-12 group-hover:opacity-100`}
                ></span>
              )}
              <Link
                className={`menu-item ${
                  selectedIndex1 === 1 ? "text-black" : ""
                } text-primary-light group-hover:text-black`}
                href='/#portfolio'
                onClick={() => setSelectedIndex1(1)}
              >
                Portfolio
              </Link>
            </li>
            {/* End of Portfolio Link */}
            {/* Start of About-me Link*/}
            <li className={`group text-2xl relative font-bold mr-20`}>
              {selectedIndex1 === 2 ? (
                <span
                  className={`menu-effect transform opacity-100 -rotate-12 
                                    group-hover:-rotate-12 group-hover:opacity-100`}
                ></span>
              ) : (
                <span
                  className={`menu-effect transform opacity-0 rotate-12 
                                    group-hover:-rotate-12 group-hover:opacity-100`}
                ></span>
              )}
              <Link
                className={`menu-item ${
                  selectedIndex1 === 2 ? "text-black" : ""
                } text-primary-light group-hover:text-black`}
                href='/#about-me-component'
                onClick={() => setSelectedIndex1(2)}
              >
                About-Me
              </Link>
            </li>
            {/* End of About-me Link */}
            {/* Start of Contact-Me Link*/}
            <li className={`group text-2xl relative font-bold mr-20`}>
              {selectedIndex1 === 3 ? (
                <span
                  className={`menu-effect transform opacity-100 -rotate-12 
                                    group-hover:-rotate-12 group-hover:opacity-100`}
                ></span>
              ) : (
                <span
                  className={`menu-effect transform opacity-0 rotate-12 
                                    group-hover:-rotate-12 group-hover:opacity-100`}
                ></span>
              )}
              <Link
                className={`menu-item ${
                  selectedIndex1 === 3 ? "text-black" : ""
                } text-primary-light group-hover:text-black`}
                href='/contact-me'
                onClick={() => setSelectedIndex1(3)}
              >
                Contact Me
              </Link>
            </li>
            {/* End of Contact-Me Link */}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
