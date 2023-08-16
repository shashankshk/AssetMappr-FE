import React from 'react'
import cx from 'classnames'
type ButtonSize = 'small' | 'large' | undefined
interface Props {
  name: string
  id?: string
  onchange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  display?: string
  initialValue: string
  initialLabel: string
  options: Option[]
  classname?: string
  size?: ButtonSize
}

export interface Option {
  value: string | number
  label: string
  [key: string]: any
}

const SelectOption: React.FC<Props> = ({
  name,
  id,
  onchange,
  options,
  display,
  initialValue,
  initialLabel,
  classname,
  size,
}) => {
  return (
    <select
      name={name}
      id={id}
      onChange={onchange}
      className={cx('select-primary', { [`select-primary_${size}`]: true }, classname)}
    >
      <option style={{ display: display }} value={initialValue}>
        {initialLabel}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SelectOption
