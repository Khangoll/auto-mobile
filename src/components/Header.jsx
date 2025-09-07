import React, { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Sidebar from "./Sidebar"; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`h-20 w-full z-50 pt-1 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 bg-black animate-down"
            : "bg-transparent"
        }`}
      >
        <div className="w-full relative">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white font-sans">
            <div className="items-center gap-10 hidden xl:flex">
              <div className="flex items-center gap-2 hover:text-gray-300 font-light">
                <Phone className="w-4 h-4" />
                <a href="#">+1 631 123 4567</a>
              </div>
              <nav className="hidden md:flex gap-10 font-semibold">
                <a href="#about" className="hover:text-gray-300">
                  About Us
                </a>
                <a href="#products" className="hover:text-gray-300">
                  Browse Products
                </a>
              </nav>
            </div>

            <a href="#contacts"  className="flex-shrink-0">
              <img src="logo.png" alt="logo" />
            </a>

            <div className="items-center gap-8 hidden xl:flex">
              <nav className="hidden md:flex gap-12 font-semibold">
                <a href="#reviews" className="hover:text-gray-300">
                  Customer Reviews
                </a>
                <a href="#contacts" className="hover:text-gray-300">
                  Contact Us
                </a>
              </nav>
              <div className="flex gap-4">
                <FaFacebookF className="cursor-pointer hover:text-gray-300" />
                <RiTwitterXFill className="cursor-pointer hover:text-gray-300" />
                <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
                <FaInstagram className="cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 h-20 w-20 flex items-center justify-center">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="text-white hover:text-gray-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Header;
