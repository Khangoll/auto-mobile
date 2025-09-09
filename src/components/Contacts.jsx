import React, { useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const body = {
      name: e.target.name.value.trim(),
      contactNo: e.target.contactNo.value.trim(),
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim(),
    };

    try {
      const res = await fetch("http://localhost:8000/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `HTTP ${res.status}`);
      }

      let data = null;
      try {
        data = await res.json();
      } catch {
        data = { success: false };
      }

      const success =
        data?.success === true ||
        (typeof data?.success === "string" &&
          data.success.toLowerCase() === "true");

      if (success) {
        toast.success("Successfully sent eth email");
        e.target.reset();
      } else {
        throw new Error("success=false ирлээ.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error try again");
    } finally {
      setLoading(false);
    }
  }

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
      {/* ToastContainer-аа нэг л удаа байрлуулна */}
      <ToastContainer position="top-right" autoClose={2500} pauseOnHover />

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
          {/* === ФОРМ === */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="max-w-lg">
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="w-full border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 focus:border-white focus:outline-none"
              />
            </div>
            <div className="max-w-lg">
              <input
                name="contactNo"
                type="text"
                placeholder="Contact No"
                className="w-full border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 focus:border-white focus:outline-none"
              />
            </div>
            <div className="max-w-lg">
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 focus:border-white focus:outline-none"
              />
            </div>
            <div className="max-w-lg">
              <textarea
                name="message"
                rows="4"
                placeholder="Type Your Message Here"
                required
                className="w-full border-b border-white/40 bg-transparent py-3 text-white placeholder-white/60 focus:border-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#e63946] px-10 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-500 ease-in-out hover:bg-[#0888A3] disabled:opacity-60"
            >
              {loading ? "SENDING..." : "SUBMIT INFORMATION"}
            </button>
          </form>

          {/* === Баруун талын мэдээлэл === */}
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
                  <p>123 Park Avenue, New</p> <p>York, United States</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <BiSolidPhoneCall className="text-white text-3xl" />
                <div className="flex gap-8">
                  <span>+1 631 1234 5678</span> <span>+1 631 1234 5678</span>
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
