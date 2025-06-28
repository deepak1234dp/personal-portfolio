import React from "react";
// Importing the Card component to display individual items
import { Card } from '../Components/Card';
// Importing the list of items to display from a mock database
import { items } from "../db/items";
// "WhyChooseUs" section component that displays a grid of reasons to choose the person
export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-2 my-10">Why Choose Me?</h2>
      <p className="text-center text-gray-500 mb-10">Here’s why I can be a good person to work with</p>
      {/* Responsive grid layout displaying cards for each item */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <Card key={index} {...item}>
            <img src={item.image} alt={item.title} className="w-12 h-12 mb-4" />
            <h4 className="text-center text-2xl text-blue-700">{item.title}</h4>
            <p className="text-center">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};