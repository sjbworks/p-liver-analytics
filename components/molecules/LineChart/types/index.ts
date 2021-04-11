export type SeriesType = { name: string; data: number[] }

export type LineChartProps<T> = { series: SeriesType[]; categories: T[] }
