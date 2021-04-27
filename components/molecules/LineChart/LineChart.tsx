import dynamic from 'next/dynamic'
import React from 'react'
import { generateOption, LineChartProps } from '.'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export const LineChart = ({ series, categories }: LineChartProps<string>) => {
  const options = generateOption(categories)
  return <Chart options={options} series={series} type="line" width="500" />
}
