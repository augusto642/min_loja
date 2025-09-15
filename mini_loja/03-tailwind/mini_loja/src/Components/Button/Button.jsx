import React from "react";
import { FiLoader } from "react-icons/fi"; 
const Button = ({
  children,
  variant = "solid",
  size = "md",
  isLoading = false,
  ...props
}) => {
  const baseClasses =
    "w-full rounded-lg border-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";

  const variants = {
    solid:
      "bg-primary text-primary-contrast border-primary hover:bg-transparent hover:text-primary hover:border-red-500 active:bg-red-500 active:border-red-500 active:text-white",
    outline:
      "bg-transparent text-primary border-primary hover:bg-transparent hover:text-primary hover:border-red-500 active:bg-red-500 active:border-red-500 active:text-white",
    ghost:
      "bg-transparent text-primary border-transparent hover:bg-tag-bg hover:border-red-500 active:bg-red-500 active:text-white",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      disabled={isLoading}
      {...props}
      aria-label={isLoading ? "Carregando..." : children} 
    >
      {isLoading && <FiLoader className="animate-spin mr-2" />} 
      {children}
    </button>
  );
};

export default Button;
