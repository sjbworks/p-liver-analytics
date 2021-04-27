import { LineChart } from 'components/molecules/LineChart'
import { Text } from 'components/atoms/Text'
import { LineChartProps } from 'components/molecules/LineChart'

const SERIES = [
  {
    name: 'data',
    data: [438484, 179148, 269564, 386500, 20, 192352, 402343, 364503, 183027, 245837, 402343, 1452398],
  },
]

const CATEGORIES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

const LINE_CHART_PROPS: LineChartProps<string> = { series: SERIES, categories: CATEGORIES }

const CoreFan = () => (
  <div>
    <Text size="small">corefan</Text>
    <LineChart {...LINE_CHART_PROPS} />
  </div>
)

export default CoreFan
