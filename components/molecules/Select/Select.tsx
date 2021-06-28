import { Select as CHSelect } from '@chakra-ui/react'
import { SelectProps, SELECT_SIZE } from '.'
import { ChangeEvent } from 'react'

export const Select = ({
  value,
  placeholder,
  onChange,
  options,
  size = SELECT_SIZE.MD,
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
    <CHSelect
      value={value}
      placeholder={placeholder}
      size={size}
      isDisabled={disabled}
      className={className}
      onChange={handleChange}
    >
      {Options}
    </CHSelect>
  )
}
