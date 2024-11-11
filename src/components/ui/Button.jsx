import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'default' }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'destructive':
        return 'bg-red-600 hover:bg-red-700 text-white';
      case 'outline':
        return 'border border-gray-300 hover:bg-gray-100 text-gray-700';
      default:
        return 'bg-slate-900 hover:bg-slate-800 text-white';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium transition-colors ${getVariantClasses()} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;