import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contacts = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-[#111]"
      style={{
        backgroundImage: "url('about-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div id="contacts" className="mx-auto max-w-7xl px-6 pt-16 md:px-10">
        <div className="mb-10">
          <p className="text-white text-4xl md:text-5xl font-semibold">
            Questions?
          </p>
          <p className="text-[#0888A3] text-5xl md:text-6xl font-extrabold mt-2">
            Lets Get In Touch
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <form className="space-y-6">
            <div className="max-w-lg">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 focus:border-white focus:outline-none"
              />
            </div>
            <div className="max-w-lg">
              <input
                type="text"
                placeholder="Contact No"
                className="w-full border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 focus:border-white focus:outline-none"
              />
            </div>
            <div className="max-w-lg">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 focus:border-white focus:outline-none"
              />
            </div>
            <div className="max-w-lg">
              <textarea
                rows="4"
                placeholder="Type Your Message Here"
                className="w-full border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 focus:border-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#e63946] px-10 py-4 text-lg font-semibold text-white shadow-lg 
  transition-colors duration-500 ease-in-out hover:bg-[#0888A3]"
            >
              SUBMIT INFORMATION
            </button>
          </form>

          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">Store Location</h3>
            <p className="text-white/80 mb-8 max-w-md">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered .
            </p>

            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <FaLocationDot className="mt-1 text-white text-3xl" />
                <div>
                  <p>123 Park Avenue, New</p>
                  <p>York, United States</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <BiSolidPhoneCall className="text-white text-3xl" />
                <div className="flex gap-8">
                  <span>+1 631 1234 5678</span>
                  <span>+1 631 1234 5678</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <FaTelegramPlane className="text-white text-3xl" />
                <span>email@website.com</span>
              </li>
            </ul>

            <div className="flex items-center gap-5 text-white/80 text-lg">
              <a href="#" className="hover:text-[#0888A3]">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#0888A3]">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-[#0888A3]">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-[#0888A3]">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#0888A3]">
                <FaPinterestP />
              </a>
              <a href="#" className="hover:text-[#0888A3]">
                <FaGooglePlusG />
              </a>
            </div>
          </div>
        </div>

        <div className="h-16" />
      </div>
    </section>
  );
};

export default Contacts;
