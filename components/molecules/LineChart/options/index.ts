import { formatValue } from '..'

export const generateOption = (categories) => ({
  chart: {
    toolbar: { show: false },
  },
  xaxis: {
    type: 'category',
    categories,
  },
  yaxis: {
    labels: {
      formatter: (val: number) => formatValue(val),
    },
  },
  tooltip: {
    y: {
      formatter: (val) => val.toLocaleString('en'),
    },
  },
})
