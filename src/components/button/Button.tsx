import React from 'react'
import cx from 'classnames'
type ButtonSize = 'large' | 'medium' | 'small'
export interface ButtonProps {
  children?: React.ReactNode
  onClick?: React.FormEventHandler
  type?: 'button' | 'submit' | 'reset'
  value?: string
  className?: string
  disabled?: boolean
  size?: ButtonSize
  flexible?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  value,
  className,
  disabled,
  size,
  flexible,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      value={value}
      className={cx(
        'btn',
        { [`btn-${type}`]: type ?? true },
        className,
        {
          [`btn_${size}`]: size ?? true,
        },
        { [`btn_flexible`]: flexible },
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
