import { ThemingProps } from '@chakra-ui/react'

export type InputProps = {
  value: string | number
  placeholder?: string
  onChange: (value: string | number) => void
  disabled?: boolean
  size?: ThemingProps<'Input'>['size']
  className?: string
}
