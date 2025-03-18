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
  });

  return <div>Header</div>;
}

export default Header;
