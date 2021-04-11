import Chart from 'react-apexcharts'
import React from 'react'
import { generateOption, LineChartProps } from '.'

export const LineChart = ({ series, categories }: LineChartProps<string>) => {
  const options = generateOption(categories)
  return <Chart options={options} series={series} type="line" width="500" />
}
