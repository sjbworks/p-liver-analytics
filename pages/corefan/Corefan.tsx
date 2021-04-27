import { LineChart } from 'components/molecules/LineChart'
import { LINE_CHART_PROPS } from '.'
import { Text } from 'components/atoms/Text'

export const CoreFan = () => (
  <div>
    <Text size="small">corefan</Text>
    <LineChart {...LINE_CHART_PROPS} />
  </div>
)
