import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}
export function Button({
  children,
  variant = 'primary',
  to,
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseClassName = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  if (to) {
    return <Link to={to} className={`${baseClassName} ${className}`}>
        {children}
      </Link>;
  }
  return <button type={type} onClick={onClick} className={`${baseClassName} ${className}`}>
      {children}
    </button>;
}