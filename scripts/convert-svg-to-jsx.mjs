import svgr from '@svgr/core'
import fs from 'fs-extra'

// Args
const svgFilePath = process.argv[2]
const inputName = process.argv[3]

// Variables
const componentName = `${inputName.charAt(0).toUpperCase()}${inputName.slice(1) || 'TestIcon'}`
const iconFolderPath = './src/components/atoms/Icon/Icons/'
const extension = 'js'

// Helper function
const convertToKebabCase = (string) => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()

// Read targeted file
fs.readFile(svgFilePath, 'utf8', (err, svg) => {
  if (err) {
    console.error(err)
  }

  // Use SVGR to transform SVG
  svgr.default(
    svg,
    {
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier'
      ],
      svgProps: {
        width: '{size || width || 32}',
        height: '{size || height || 32}',
        className: `icon icon-${convertToKebabCase(inputName)}`,
        fill: '{fill || none}'
      }
    },
    {
      componentName,
    },
  ).then((iconComponent) => {
    // Output file to Icon folder
    fs.outputFile(
      `${iconFolderPath}${componentName}.${extension}`,
      iconComponent,
      'utf8'
    )
  })
})
