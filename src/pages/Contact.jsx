import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919935459332";
    const text = `Hello X-Gen Classes,%0A%0AMy name is *${form.name}* (%20${form.email}%20).%0A%0A${form.message}%0A%0AThank you!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or want to enroll at{" "}
            <span className="font-semibold text-blue-600">X-Gen Classes</span>?  
            Reach out today — we’d love to hear from you.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <a href="mailto:xgenclasses@gmail.com" className="hover:text-blue-600">
                jumpy.lko@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaWhatsapp className="text-green-600 text-xl" />
              <a
                href="https://wa.me/919935459332"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                Chat on WhatsApp
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <span>
                Near Union Bank of India, Tiwari Ganj, Chinhat, Lucknow – 226028
              </span>
            </p>
          </div>
        </div>

        
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition transform hover:scale-105"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
