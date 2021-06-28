import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Select } from 'components/molecules/Select'

export default {
  title: 'components/molecules/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const select = () => {
  const [value, setValue] = useState('')
  const onChange = (value: string) => setValue(value)
  const OPTIONS = [
    { name: 'A1', value: 'A1' },
    { name: 'A2', value: 'A2' },
    { name: 'A3', value: 'A3' },
  ]

  return (
    <div>
      <Select value={value} options={OPTIONS} onChange={onChange} placeholder="meter" size="xs" className="block" />
      <Select value={value} options={OPTIONS} onChange={onChange} placeholder="meter" size="sm" className="block" />
      <Select value={value} options={OPTIONS} onChange={onChange} placeholder="meter" size="md" className="block" />
      <Select value={value} options={OPTIONS} onChange={onChange} placeholder="meter" size="lg" className="block" />
      <Select
        value={value}
        options={OPTIONS}
        onChange={onChange}
        placeholder="meter"
        size="md"
        disabled
        className="block"
      />
    </div>
  )
}
