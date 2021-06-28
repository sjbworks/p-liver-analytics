import { SELECT_SIZE } from '..'

export type OptionType = {
  name: string
  value: string
}

export type SelectSizeType = typeof SELECT_SIZE[keyof typeof SELECT_SIZE]

export type SelectProps = {
  value: string
  placeholder?: string
  onChange: (value: string) => void
  options: OptionType[]
  disabled?: boolean
  size?: SelectSizeType
  className?: string
}
