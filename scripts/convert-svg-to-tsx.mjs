import svgr from '@svgr/core'
import fs from 'fs-extra'
import path from 'path'

// Args
const target = process.argv[2]

// Variables
const iconFolderPath = './src/components/atoms/Icon/Icons/'
const extension = 'tsx'

// Helper function
const convertToKebabCase = (string) => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()

const isAFile = target.match(/\.[a-zA-Z]{2,5}/)
const isAnSvg = target.endsWith('.svg')

if (isAFile) {
  if (isAnSvg) {
    console.log('Target is a single svg file')

    // Split the directory from the filename
    const splitPath = target.split(/(\/|\\)/)
    const fileName = splitPath[splitPath.length - 1]
    const dir = target.split(fileName)[0]

    // Pass it to export function
    exportSvg(dir, fileName)
  } else {
    console.log(`Target is not an svg file: ${target}`)
  }
} else {
  // Target is not a file -> treat it as directory
  fs.readdir(target, (err, files) => {
    const dir = target

    if (err) {
      console.log(err)
    }
    // filter files in folder for only .svg files
    const svgFiles = files.filter((file) => file.endsWith('.svg'))

    if (svgFiles.length === 0) {
      console.log('No svg files found!')
    } else {
      console.log(`${svgFiles.length} SVG file(s) found!`)

      // Export each file
      svgFiles.forEach((file) => {
        console.log('Converting svg file to component:')
        exportSvg(dir, file)
      })
    }
  })
}

function exportSvg(dirName, fileName) {
  const currentSvgPath = path.join(dirName, fileName) // Join dir and file for a full path
  const svgName = fileName.split('.')[0] // is fileName without file extension
  // Split on dashes, capitalize each first letter
  const componentName = svgName.split('-').map((x) => `${x.charAt(0).toUpperCase()}${x.slice(1)}`).join('') || svgName.charAt(0).toUpperCase()

  // Read targeted file
  fs.readFile(currentSvgPath, 'utf8', (err, svg) => {
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
          className: `icon icon-${convertToKebabCase(svgName)}`,
          fill: '{fill || "none"}'
        },
        typescript: true,
        prettierConfig: { semi: false, singleQuote: true},
        template: customTemplate
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


    fs.readFile('./src/components/atoms/Icon/index.tsx', 'utf8', (err, index) => {
      if (err) {
        console.log(err)
      }
      const identifier = '// Add Import Above'
      const insert = `import ${componentName} from './Icons/${componentName}'`
      const split = index.split(identifier)
      const newIndex = `${split[0]}${insert}
${identifier}${split[1]}`

      fs.outputFile('./src/components/atoms/Icon/index.tsx', newIndex, 'utf8')
    })

    //     fs.readFile('./src/components/atoms/Icon/index.tsx', 'utf8', (compErr, compIndex) => {
    //       if (compErr) {
    //         console.log(compErr)
    //       }
    //       const identifier = '})// Add Icon Above'
    //       const insert = `\'${svgName}\': <${componentName} {...props} />,`
    //       const split = compIndex.split(identifier)
    //       const newIndex = `${split[0]}  ${insert}
    // ${identifier}${split[1]}`

    //       fs.outputFile('./src/components/atoms/Icon/index.tsx', newIndex, 'utf8')
    //     })
  })

  console.log(` ${fileName} -> ${componentName}.${extension}`)
}

function customTemplate(
  { template },
  opts,
  {
    imports, interfaces, componentName, props, jsx, exports
  },
) {
  const plugins = ['jsx']
  if (opts.typescript) {
    plugins.push('typescript')
  }
  const typeScriptTpl = template.smart({ plugins })
  return typeScriptTpl.ast`${imports}
${interfaces}
function ${componentName}(size: number, width: number, height: number, color: string, fill: string, ${props}) {
  return ${jsx};
}
${exports}
  `
}
