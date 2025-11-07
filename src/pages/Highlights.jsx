import React, { useEffect, useRef, useState } from "react";
import { FaLightbulb, FaClipboardCheck, FaQuestionCircle } from "react-icons/fa";

export default function Highlights() {
  const highlightRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    if (highlightRef.current) observer.observe(highlightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={highlightRef}
      className={`relative py-16 px-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white text-center transform transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">✨ Course Highlights</h2>

        <div className="grid gap-8 sm:grid-cols-3">
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition">
            <FaLightbulb className="text-yellow-300 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Concept-Based Learning</h3>
            <p className="text-sm mt-2 text-blue-100">
              Deep understanding of topics — no rote memorization.
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition">
            <FaClipboardCheck className="text-green-300 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Weekly Practice</h3>
            <p className="text-sm mt-2 text-blue-100">
              Consistent assignments and performance tracking.
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition">
            <FaQuestionCircle className="text-pink-300 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Doubt Solving Sessions</h3>
            <p className="text-sm mt-2 text-blue-100">
              Dedicated sessions to ensure no concept remains unclear.
            </p>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-28 bg-white opacity-10 blur-3xl rounded-full"></div>
    </section>
  );
}
