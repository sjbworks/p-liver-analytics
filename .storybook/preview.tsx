import '../styles/global.css'
import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { StoryContext } from '@storybook/react'

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

export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
}

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals
  const dir = direction.toLowerCase()
  return (
    <ChakraProvider theme={extendTheme({ direction: dir })}>
      <div dir={dir} id="story-wrapper" style={{ minHeight: '100vh' }}>
        <StoryFn />
      </div>
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
