import React,{memo} from "react";
// Importing the Card component to display individual items
import { Card } from '../Components/Card';
// Importing the list of items to display from a mock database
import { services } from "../db/services";

// "Services" section component that displays a grid of offered services
export const Services = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 mt-12">My Services</h2>

      {/* Responsive grid layout displaying cards for each service */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card key={index} {...service}>
            <img src={service.image} alt={service.title} className="w-12 h-12 mb-4" />
            <p className="text-center">{service.title}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
