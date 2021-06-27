import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import { Text } from 'components/atoms/Text'

export default {
  title: 'components/atoms/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const text = () => (
  <div className="p-4">
    <Text size="small" className="block mt-2">
      Title
    </Text>
    <Text size="medium" className="block mt-2">
      Title
    </Text>
    <Text size="large" bold className="block mt-2">
      Title
    </Text>
  </div>
)
