import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components/Button";
import { InputField } from "../Components/InputField";
// Footer section with newsletter subscription and links
export const Footer = () => {
  // Newsletter email input state
  const [email, setEmail] = useState("");
  // Handle newsletter form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white px-4 py-10">
      {/* Newsletter */}
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h3>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="px-4 py-2 rounded-md text-gray-800 w-full sm:w-auto flex-1 bg-white"
          />
          <Button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-2 rounded-md cursor-pointer"
          >
            Subscribe
          </Button>
        </form>
      </div>
      {/* Footer bottom: copyright and links */}
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Deepak Pandey. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link to="https://www.linkedin.com/in/deepak-pandey-195336289" target="_blank" className="hover:underline">
            LinkedIn
          </Link>
          <Link to="https://github.com/deepak1234dp/personal-portfolio/tree/main" target="_blank" className="hover:underline">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};
