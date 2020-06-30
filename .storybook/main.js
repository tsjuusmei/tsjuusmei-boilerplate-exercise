const path = require('path')

module.exports = {
  stories: [
    '../src/components/**/*.stories.js',
    '../stories/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: './.storybook/',
            }
          }
        },
        'sass-loader',
        {
          loader: 'sass-resources-loader',options: {
            resources: [
              path.resolve(__dirname, '../src/styles/base/_css-vars.scss'),
              path.resolve(__dirname, '../src/styles/base/_variables.scss'),
              path.resolve(__dirname, '../src/styles/base/_fonts.scss'),
              path.resolve(__dirname, '../src/styles/base/_reset.scss'),
              path.resolve(__dirname, '../src/styles/base/_base.scss'),
              path.resolve(__dirname, '../src/styles/base/_typography.scss')
            ]
          }
        }
      ]
    })

    config.resolve.alias = {
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/styles': path.resolve(__dirname, '../src/styles'),
      '@/hooks': path.resolve(__dirname, '../src/helpers/hooks'),
      '@/utils': path.resolve(__dirname, '../src/helpers/utils')
    }

    // Return the altered config
    return config
  }
}
