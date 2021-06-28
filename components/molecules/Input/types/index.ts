import { INPUT_SIZE } from '..'

export type SelectSizeType = typeof INPUT_SIZE[keyof typeof INPUT_SIZE]

export type InputProps = {
  value: string
  placeholder?: string
  onChange: (value: string) => void
  disabled?: boolean
  size?: SelectSizeType
  className?: string
}
