import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0'

import { LineChart } from '../components/molecules/LineChart'

export default {
  title: 'components/LineChart',
  component: LineChart,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const series = {
  name: 'data',
  data: [438484, 179148, 269564, 386500, 20, 192352, 402343, 364503, 183027, 245837, 402343, 1452398],
}

const categories = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

export const barChart = () => <LineChart series={[series]} categories={categories} />
