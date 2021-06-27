import { Input as CHInput } from '@chakra-ui/react'
import { InputProps } from '.'

export const Input = ({ value, placeholder, disabled }: InputProps) => {
  return <CHInput value={value} placeholder={placeholder} disabled={disabled} size="xs" />
}
