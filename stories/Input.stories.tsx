import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Input } from 'components/molecules/Input'

export default {
  title: 'components/atoms/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const input = () => {
  const [value, setValue] = useState('')
  const onChange = (value: string) => setValue(value)

  return (
    <div>
      <Input value={value} onChange={onChange} placeholder="meter" size="xs" className="block" />
      <Input value={value} onChange={onChange} placeholder="meter" size="sm" className="block" />
      <Input value={value} onChange={onChange} placeholder="meter" size="md" className="block" />
      <Input value={value} onChange={onChange} placeholder="meter" size="lg" className="block" />
      <Input value={value} onChange={onChange} placeholder="meter" size="md" disabled className="block" />
    </div>
  )
}
