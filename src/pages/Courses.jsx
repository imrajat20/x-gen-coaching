import React, { useEffect, useRef, useState } from "react";
import { FaAtom, FaFlask, FaCalculator } from "react-icons/fa";

export default function Courses() {
  const sectionRef = useRef(null);
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      title: "Physics",
      description:
        "Develop a deep understanding of concepts through visualization, real-life examples, and problem-solving practice.",
      icon: <FaAtom className="text-blue-600 text-5xl mb-4" />,
      color: "from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200",
    },
    {
      title: "Chemistry",
      description:
        "Master organic, inorganic, and physical chemistry with clear explanations and proven techniques.",
      icon: <FaFlask className="text-green-600 text-5xl mb-4" />,
      color: "from-green-50 to-green-100 hover:from-green-100 hover:to-green-200",
    },
    {
      title: "Mathematics",
      description:
        "Strengthen fundamentals, boost logical reasoning, and conquer every formula and theorem with confidence.",
      icon: <FaCalculator className="text-yellow-500 text-5xl mb-4" />,
      color: "from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="courses"
      className={`py-24 px-6 bg-gradient-to-b from-white to-blue-50 text-center transform transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our <span className="text-blue-600">Core Subjects</span>
        </h2>

        
        <p className="text-lg italic text-blue-700 mb-10">
          “Strong foundations lead to limitless growth.”
        </p>

        
        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          Learn <span className="font-semibold text-blue-600">Physics, Chemistry,</span> and{" "}
          <span className="font-semibold text-blue-600">Mathematics</span> with{" "}
          <span className="font-semibold text-blue-600">Mr. Jaiditya Prakash Singh</span> — a mentor with
          <span className="font-semibold"> 22+ years of excellence</span> in guiding students toward
          confidence and academic mastery.
        </p>

        
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-10 shadow-lg bg-gradient-to-br ${course.color} 
                hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300`}
            >
              
              <div className="absolute inset-0 rounded-3xl bg-white opacity-0 hover:opacity-10 transition duration-300"></div>

              {course.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {course.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{course.description}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-32 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
    </section>
  );
}
