const path = require('path')

const importedFiles = [
  path.resolve(__dirname, '../src/styles/config/_media-queries.scss'),
  path.resolve(__dirname, '../src/styles/config/_fonts.scss'),
]

module.exports = {
  stories: [
    '../src/components/**/*.stories.js',
    '../stories/**/*.stories.js',
    '../src/components/**/*.stories.tsx',
    '../stories/**/*.stories.tsx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.module\.s(a|c)ss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          }
        },
        {
          loader: 'resolve-url-loader',
          options: {
            root: path.resolve(__dirname, '../public')
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: importedFiles
          }
        }
      ]
    })

    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'resolve-url-loader',
          options: {
            root: path.resolve(__dirname, '../public')
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: importedFiles
          }
        }
      ]
    })

    config.resolve.alias = {
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/styles': path.resolve(__dirname, '../src/styles'),
      '@/hooks': path.resolve(__dirname, '../src/helpers/hooks'),
      '@/constants': path.resolve(__dirname, '../src/helpers/constants'),
      '@/utils': path.resolve(__dirname, '../src/helpers/utils'),
      '@/data': path.resolve(__dirname, '../src/data')
    }

    // Reverts Next Images to regular images
    config.resolve.alias['next/image'] = require.resolve('../__mocks__/Image/index.tsx')

    // Return the altered config
    return config
  }
}
