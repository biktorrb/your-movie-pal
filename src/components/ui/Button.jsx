import React from 'react';
import { Link } from 'react-router-dom';


const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '' 
}) => {
  

  const baseStyles = "inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none";

  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
    outline: "border-2 border-gray-500 text-gray-300 hover:border-white hover:text-white hover:bg-white/10"
  };

  const finalClass = `${baseStyles} ${variants[variant]} ${className}`;


  if (to) {
    return (
      <Link to={to} className={finalClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
};

export default Button;