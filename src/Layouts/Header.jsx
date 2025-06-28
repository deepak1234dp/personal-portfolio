import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Components/Button";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); //State to control whether the mobile menu is open or closed


  const navigate = useNavigate('');

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Navigates to home page when clicked */}
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer" onClick={() => navigate("/")}>PortFolio</div>

        {/*
          Hamburger menu button visible on mobile devices (md:hidden)
          - Toggles isOpen to show/hide mobile menu
        */}
        <div className="md:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-600 focus:outline-none text-2xl"
          >
            ☰
          </Button>
        </div>
        {/* Desktop navigation menu - Visible on medium and larger screens */}
        <div className="hidden md:flex gap-6 font-medium text-gray-800">
          <Link to="/why" className="hover:underline hover:text-indigo-700">Why Choose Me</Link>
          <Link to="/services" className="hover:underline hover:text-indigo-700">Services</Link>
          <Link to="/contact" className="hover:underline hover:text-indigo-700">Contact</Link>
        </div>
      </div>
      {/*
        Mobile navigation menu
        - Only visible when isOpen is true
        - Contains links stacked vertically
      */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link to="/why" onClick={() => setIsOpen(false)} className="block py-2 border-b">Why Choose Me</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 border-b">Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};
