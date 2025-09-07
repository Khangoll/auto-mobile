import React from "react";
import { X } from "lucide-react";

export default function Sidebar({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        aria-label="Close sidebar overlay"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      <aside
        className="ml-auto h-full w-[88%] sm:w-[420px] bg-[#0d97a8] text-white p-8 relative
                   animate-slide-in-right"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Close sidebar"
          className="absolute right-6 top-6 text-white/90 hover:text-white"
        >
          <X className="h-7 w-7" />
        </button>

        <nav className="mt-10 space-y-7 text-2xl">
          <a href="#" className="hover:opacity-90 block">
            Home
          </a>
          <a href="#about" className="hover:opacity-90 block">
            About Us
          </a>
          <a href="#products" className="hover:opacity-90 block">
            Browse Products
          </a>
          <a href="#reviews" className="hover:opacity-90 block">
            Customer Reviews
          </a>
          <a href="#contacts" className="hover:opacity-90 block">
            Contact Us
          </a>
        </nav>
      </aside>
    </div>
  );
}
