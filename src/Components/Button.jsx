import React from "react";

/*
  Reusable Button component

  Props:
    - onClick: function to handle click events
    - className: custom CSS classes for styling
    - children: content inside the button (text, icons)
    - type: button type attribute (e.g. "button", "submit", "reset")
*/
export const Button = ({ onClick, className, children, type }) => {
    return (
        <>
            <button
                onClick={onClick}
                className={className}
                type={type}
            >
                {children}
            </button>
        </>
    )
}