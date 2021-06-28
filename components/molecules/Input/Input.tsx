import { Input as CHInput } from '@chakra-ui/react'
import { InputProps, INPUT_SIZE } from '.'
import { ChangeEvent } from 'react'

export const Input = ({ value, placeholder, onChange, size = INPUT_SIZE.MD, disabled, className }: InputProps) => {
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
