const path = require("path");

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links','@storybook/addon-essentials'],
  typescript: {
    check: false,
    checkOptions: {},
  },
  webpackFinal: async (config) => {
    // config.resolve.alias['components'] = path.resolve(__dirname, '../components')
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': path.resolve('node_modules/@emotion/react'),
          'emotion-theming': path.resolve('node_modules/@emotion/react'),
          'components':path.resolve(__dirname, '../components')
        },
      },
    }
  },
}
