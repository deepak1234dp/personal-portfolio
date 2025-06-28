import React from "react";
/*
  Reusable ServiceCard component

  Props:
    - children: content to render inside the card
    
*/
export const Card = ({ children }) => {
    return (
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md shadow hover:shadow-lg transition">
            {children}
        </div>
    );
};

