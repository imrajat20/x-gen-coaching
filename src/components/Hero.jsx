import React from "react";
import mentorImg from "../assets/mentor.jpg";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-300 via-purple-200 to-blue-300 opacity-30 animate-gradientMove"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative">
        
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
              Empowering Minds at{" "}
              <span className="text-blue-600">X-Gen Classes</span> 🚀
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Learn with{" "}
              <span className="font-semibold text-blue-600">
                Mr. JAIDITYA PRAKASH SINGH
              </span>{" "}
              — a visionary educator with{" "}
              <span className="font-semibold">22+ years of teaching excellence</span>{" "}
              since <span className="text-blue-600 font-medium">2002</span>.
              Guiding students in{" "}
              <span className="font-semibold">Physics, Chemistry, and Mathematics</span>{" "}
              with clarity, discipline, and confidence.
            </p>

            <p className="italic text-gray-600 border-l-4 border-blue-600 pl-4">
              “Turning knowledge into power and learners into achievers.”
            </p>

            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition transform hover:scale-105"
              >
                Enroll Now
              </a>

              <a
                href="https://wa.me/919935459332"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-green-500 text-green-500 px-6 py-3 rounded-full font-medium hover:bg-green-500 hover:text-white transition"
              >
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
              </a>
            </div>

            
            <div className="mt-6 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-6 text-gray-700 text-base">
              <a
                href="tel:+919935459332"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <FaPhoneAlt className="text-blue-600" />
                <span>+91 99354 59332</span>
              </a>
              <a
                href="mailto:jumpy.lko@gmail.com"
                className="flex items-center gap-2 hover:text-blue-500 transition"
              >
                ✉️ <span>jumpy.lko@gmail.com</span>
              </a>
            </div>
          </div>

          
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-300 to-blue-400 opacity-40 blur-3xl animate-pulse-slow group-hover:opacity-60 transition"></div>
            <img
              src={mentorImg}
              alt="Mr. Jaiditya Prakash Singh"
              className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-600/80 text-white px-4 py-2 rounded-full text-sm shadow-md backdrop-blur-sm">
              “Guiding Bright Minds Since 2002”
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our <span className="text-blue-600">Vision</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          At <span className="font-semibold text-blue-600">X-Gen Classes</span>, we aim to nurture young minds
          to think beyond memorization — to understand, apply, and innovate.
          Our vision is to build confident learners who achieve excellence
          not just in exams, but in life.
        </p>

        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="bg-white shadow-md rounded-2xl p-6 w-64 hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
              alt="Physics Book"
              className="mx-auto mb-4 w-20 h-20"
            />
            <h3 className="text-xl font-semibold text-blue-700">Physics</h3>
            <p className="text-gray-600 text-sm mt-2">
              Building a strong foundation with concepts and logic.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 w-64 hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081463.png"
              alt="Chemistry Book"
              className="mx-auto mb-4 w-20 h-20"
            />
            <h3 className="text-xl font-semibold text-blue-700">Chemistry</h3>
            <p className="text-gray-600 text-sm mt-2">
              Learning reactions through patterns and reasoning.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 w-64 hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4119/4119325.png"
              alt="Math Book"
              className="mx-auto mb-4 w-20 h-20"
            />
            <h3 className="text-xl font-semibold text-blue-700">Mathematics</h3>
            <p className="text-gray-600 text-sm mt-2">
              Developing problem-solving skills with clarity and precision.
            </p>
          </div>
        </div>


        <div className="bg-blue-600 text-white py-12 rounded-3xl shadow-lg max-w-4xl mx-auto">
          <p className="text-2xl italic font-light max-w-2xl mx-auto mb-4">
            “Education is not about learning facts, but training the mind to think.”
          </p>
          <p className="font-semibold text-blue-200">– Albert Einstein</p>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Message from the <span className="text-blue-600">Director</span>
          </h2>

          <div className="bg-white shadow-lg rounded-3xl p-10 md:p-12">
            <img
              src={mentorImg}
              alt="Mr. Jayditya Singh"
              className="w-32 h-32 mx-auto rounded-full shadow-lg mb-6 object-cover"
            />
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              "At <span className="font-semibold text-blue-600">X-Gen Classes</span>, our goal isn’t just to help students
              score well — it’s to make them fall in love with learning. 
              We focus on building concepts, discipline, and self-belief.
              Every child has potential; our job is to guide them to unlock it."
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Mr. JAIDITYA PRAKASH SINGH</h3>
            <p className="text-blue-600 font-medium">
              Founder & Director, X-Gen Classes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
