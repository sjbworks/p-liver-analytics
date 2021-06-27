import { Input as CHInput } from '@chakra-ui/react'
import { InputProps } from '.'
import { ChangeEvent } from 'react'

export const Input = ({ value, placeholder, onChange, size, disabled, className }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)
  return (
    <CHInput
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      size={size}
      disabled={disabled}
      className={className}
    />
  )
}
