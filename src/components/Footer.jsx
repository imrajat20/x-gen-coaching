import React from "react";
import {  FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 text-center">
      <p className="text-lg font-semibold">X-Gen Classes</p>
      <p className="text-sm mb-4">Guided by Mr. Jayditya Singh — 22+ years of teaching excellence</p>

     
      <div className="flex justify-center space-x-6 mb-4">
        
       
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 text-2xl transition-transform transform hover:scale-110"
        >
          <FaWhatsapp />
        </a>
      </div>

      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} X-Gen Classes. All rights reserved.
      </p>
    </footer>
  );
}
