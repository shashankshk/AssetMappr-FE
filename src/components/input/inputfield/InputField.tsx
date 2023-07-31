import React, { RefObject } from 'react'

interface Props {
  type: string
  id?: string
  className?: string
  placeholder: string
  ref?: RefObject<HTMLInputElement>
  autocomplete?: string
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  value?: any
}

const InputField: React.FC<Props> = ({
  type,
  id,
  className,
  placeholder,
  ref,
  autocomplete,
  onchange,
  required,
  value,
}) => {
  return (
    <input
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      ref={ref}
      autoComplete={autocomplete}
      onChange={onchange}
      required={required}
      value={value}
    ></input>
  )
}

export default InputField
