import React from 'react';
import { Header } from './Layouts/Header';
import { Hero } from './Pages/Hero';
import { Services } from './Pages/Services';
import { WhyChooseUs } from './Pages/WhyChooseUs';
import { ContactForm } from './Pages/ContactForm';
import { Footer } from './Layouts/Footer';
import { Route, Routes } from 'react-router-dom';

// Main application component with routing and layout
function App() {
  return (
    <>
      {/* Site header */}
      <Header />

      {/* Route-based page rendering */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why" element={<WhyChooseUs />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      {/* Site footer */}
      <Footer />
    </>
  );
}

export default App;
