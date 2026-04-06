import React from 'react';

interface MainHeadingProps {
  text: string;
  className?: string; // Additional classes (like text-center) ke liye
}

const MainHeading = ({ text, className = "" }: MainHeadingProps) => {
  return (
    <h1 className={`main-heading-db ${className}`}>
      {text || "Heading Missing!"} 
    </h1>
  );
};

export default MainHeading;