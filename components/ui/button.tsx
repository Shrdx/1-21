import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  href?: string;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  href,
  className = '', 
  ...props 
}: ButtonProps) {
  
  const baseClass = "sm-btn";
  const variantClass = `sm-btn-${variant}`;
  const combinedClasses = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}