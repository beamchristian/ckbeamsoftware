"use client";
import React from "react";
import { useState, useEffect } from "react";

function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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

  return (
    <React.Fragment>
      <header
        className={`${
          isScrolled ? "headerShow" : ""
        } fixed top-0 z-50 transition-all 
      duration-500`}
        style={{
          backgroundColor: isScrolled ? "#fff" : "transparent",
          boxShadow: isScrolled ? "#48AFDE -10px 25px 50px 10px" : "",
        }}
      >
        
      </header>
    </React.Fragment>
  );
}

export default Header;
