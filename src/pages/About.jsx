import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={aboutRef}
      className={`relative py-24 px-6 bg-gradient-to-b from-white to-blue-50 text-center overflow-hidden transform transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none"></div>

      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Why Choose <span className="text-blue-600">X-Gen Classes?</span>
      </h2>

      
      <p className="text-lg italic text-blue-700 mb-10">
        “Where concept meets confidence — and every student discovers their potential.”
      </p>

      
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
        Under the expert guidance of{" "}
        <span className="font-semibold text-blue-600">Mr. Jaiditya Prakash Singh</span>, X-Gen Classes
        has been shaping bright futures for over 22 years in{" "}
        <span className="font-medium text-gray-800">Physics, Chemistry, and Mathematics</span>.
        We focus on concept clarity, discipline, and consistent practice to help
        students achieve excellence in both school and competitive exams.
      </p>

      
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        
        <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-3xl"></div>
          <div className="text-blue-600 text-4xl mb-4">👨‍🏫</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Experienced Faculty
          </h3>
          <p className="text-gray-600 leading-relaxed">
            With over 15 years of teaching excellence, our mentor brings deep
            understanding and proven methods that drive success.
          </p>
        </div>

        
        <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500 rounded-t-3xl"></div>
          <div className="text-green-600 text-4xl mb-4">💡</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Focused Doubt Sessions
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We ensure no student is left behind — every doubt is addressed with
            care to build rock-solid conceptual understanding.
          </p>
        </div>

        
        <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 rounded-t-3xl"></div>
          <div className="text-purple-600 text-4xl mb-4">📘</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Regular Tests & Analysis
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Weekly assessments with detailed performance reviews to help
            students measure progress and stay on the right track.
          </p>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
    </section>
  );
}
