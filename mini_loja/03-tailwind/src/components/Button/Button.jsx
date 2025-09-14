// src/components/Button/Button.jsx
import React from 'react';

const Button = ({ children, variant = 'solid', ...props }) => {
  const baseClasses = "w-full rounded-lg border-2 px-4 py-3 text-base font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    solid: 'bg-primary text-primary-contrast border-primary hover:bg-transparent hover:text-primary',
    outline: 'bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-contrast',
    ghost: 'bg-transparent text-primary border-transparent hover:bg-tag-bg',
  };
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;