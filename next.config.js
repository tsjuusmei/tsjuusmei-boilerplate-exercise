const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withSass({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })

    const globalSass = ['./src/styles/base/_variables.scss']

    config.module.rules.push({
      enforce: 'pre',
      test: /.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: globalSass
      }
    })

    return config
  }
})
