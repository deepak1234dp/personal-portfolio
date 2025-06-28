import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Profile image
import user from "../Assets/Images/person.jpeg";
// Hero section of the homepage
export const Hero = () => {
  // Navigation hook
  const navigate = useNavigate();
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-indigo-100 px-6 md:px-12 py-20 gap-10"
      id="hero"
    >
      {/* Text content */}
      <div className="max-w-xl flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 mt-8">
          Hi, I'm Deepak
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6 mt-4">
          A passionate Frontend Developer
        </p>
        <Link
          to="/contact"
          onClick={() => navigate("/contact")}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Hire Me
        </Link>
      </div>

      {/* Profile image */}
      <div>
        <img
          src={user}
          alt="Developer"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl ring-4 ring-white"
        />
      </div>
    </section>
  );
};
