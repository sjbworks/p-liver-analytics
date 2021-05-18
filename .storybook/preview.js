import '../styles/global.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'gray-250',
    values: [
      { name: 'white', value: '#FFF' },
      { name: 'gray-250', value: '#E8E8E8', default: true },
      { name: 'gray-500', value: '#949494' },
      { name: 'gray-750', value: '#3F3F3F' },
      { name: 'black', value: '#000' },
    ],
  },
}
