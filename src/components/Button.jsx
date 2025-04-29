import React from 'react';

const Button = ({ onClick, children, className, type = "button" }) => {
  return (
    <button
    type={type} 
      onClick={onClick}
      className={`mt-6 px-4 py-2 bg-orange-500 text-white font-medium text-sm rounded-lg cursor-pointer transition duration-200 hover:bg-black ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
