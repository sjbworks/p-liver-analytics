import dynamic from 'next/dynamic'
import React from 'react'
import { generateOption, LineChartProps } from '.'
import { Card } from 'components/atoms/Card'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export const LineChart = ({ series, categories }: LineChartProps<string>) => {
  const options = generateOption(categories)
  return (
    <Card className="p-5">
      <Chart options={options} series={series} type="line" />
    </Card>
  )
}
