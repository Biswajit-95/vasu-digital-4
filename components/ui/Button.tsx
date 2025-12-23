import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display tracking-wider uppercase transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-95";
  
  const variants = {
    primary: "bg-cosmic-blue text-white hover:bg-rich-crimson shadow-[0_4px_14px_0_rgba(15,23,42,0.39)] hover:shadow-[0_6px_20px_rgba(139,30,63,0.23)] rounded-lg border border-transparent",
    outline: "bg-transparent border border-cosmic-blue text-cosmic-blue hover:bg-cosmic-blue hover:text-white rounded-lg",
    ghost: "bg-transparent text-mystic-indigo hover:text-rich-crimson hover:bg-sacred-cream/50 rounded-lg"
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-sm font-semibold"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;