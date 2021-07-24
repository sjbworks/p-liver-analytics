import { InputProps } from '.'
import { ChangeEvent } from 'react'

export const Input = ({ value, placeholder, label, labelId, onChange, disabled, className }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)
  return (
    <div>
      {label && (
        <label htmlFor={labelId} className={`${className.label} text-gray-700`}>
          {label}
        </label>
      )}
      <input
        type="text"
        id={labelId}
        value={value}
        onChange={handleChange}
        className={`${className.input} flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg appearance-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent`}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  )
}
