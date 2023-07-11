import React from 'react';

interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: React.FormEventHandler;
  radius?: string
  width?: string;
  type: 'button' | 'submit' | 'reset';
  value: string;
  className: string;
  disabled?: boolean;
}


const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    type,
    value,
    className,
    disabled
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
      type={type}
      value={value}
      className={className}
      disabled={disabled}
    >
    {children}
    </button>
  );
}

export default Button;
