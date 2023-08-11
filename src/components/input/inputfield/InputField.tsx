/*
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
*/

import React, { RefObject } from 'react'
import cx from 'classnames'
type InputFieldSize = 'large' | 'medium' | 'small'

interface Props {
  size?: InputFieldSize;
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
  size,
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
      placeholder={placeholder}
      ref={ref}
      autoComplete={autocomplete}
      onChange={onchange}
      required={required}
      value={value}
      className={cx(
        'inputfield',
        {
          [`inputfield_${size}`]: size ?? true,
        },
        className,
      )}
    ></input>
  )
}

export default InputField

