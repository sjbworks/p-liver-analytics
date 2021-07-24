import { SelectProps, SELECT_SIZE } from '.'
import { ChangeEvent } from 'react'

export const Select = ({
  value,
  placeholder,
  onChange,
  options,
  size = SELECT_SIZE.MD,
  label,
  disabled,
  className,
}: SelectProps) => {
  const handleChange = (e: ChangeEvent<{ value: unknown }>) => onChange(e.target.value as string)
  const Options = options.map(({ name, value }, key) => (
    <option key={key} value={value}>
      {name}
    </option>
  ))
  return (
    <div>
      <label>{label}</label>
      <select
        className={`${className} block px-3 py-2 text-gray-700 bg-white border border-gray-300 w-52 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500`}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        name="animals"
      >
        {Options}
      </select>
    </div>
  )
}
