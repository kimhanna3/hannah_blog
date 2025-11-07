import React from 'react';

const Button = ({ children, onClick, href, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5';

  const variants = {
    primary: 'bg-coral text-white hover:bg-[#FF5577]',
    secondary: 'bg-baby-blue text-gray-800 hover:bg-[#9DD0E6]',
    outline: 'border-2 border-coral text-coral hover:bg-coral hover:text-white'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        download={href.includes('.pdf')}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
