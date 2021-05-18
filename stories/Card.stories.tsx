import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import { Card } from 'components/atoms/Card'
import { Text } from 'components/atoms/Text'

export default {
  title: 'components/atoms/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const card = () => (
  <Card className="p-4">
    <Text size="medium">Title</Text>
  </Card>
)
