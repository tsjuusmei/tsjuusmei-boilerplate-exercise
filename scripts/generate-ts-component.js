const { outputFile } = require('fs-extra')
const { join } = require('path')

const folder = process.argv[2] || 'atoms'
const fileName = process.argv[3] || 'example'
const convertToKebabCase = (string) => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()

const generateComponent = (name) => {
  const sub = name.substr(name.lastIndexOf('/') + 1)
  const funcName = sub.charAt(0).toUpperCase() + sub.slice(1)

  return (
    `import React from 'react'

// Types
type Props = {
  name?: string
}

// Styling
import styles from './${convertToKebabCase(name)}.module.scss'

const ${funcName}: React.FC<Props> = ({ name }) => (
  <div className={styles['${convertToKebabCase(name)}']}>
    <p>{name}</p>
  </div>
)

export default ${funcName}
`
  )
}

const generateStories = (name) => {
  const sub = name.substr(name.lastIndexOf('/') + 1)
  const funcName = sub.charAt(0).toUpperCase() + sub.slice(1)
  const folderName = folder.charAt(0).toUpperCase() + folder.slice(1)

  return (
    `import React from 'react'
import { withA11y } from '@storybook/addon-a11y'

import ${funcName} from '.'

export default {
  title: 'Components / ${folderName} / ${funcName}',
  decorators: [withA11y],
}

export const Default = () => <${funcName} />
`
  )
}

const generateCss = (name) => (
  `
.${name} {
  color: red;
}
`
)

const filePath = join('src/components', folder, fileName, 'index.tsx')
const content = generateComponent(fileName)

outputFile(filePath, content, 'utf8')
  .then(() => {
    const sassPath = join('src/components', folder, fileName, `${convertToKebabCase(fileName)}.module.scss`)
    const sassContent = generateCss(convertToKebabCase(fileName))

    outputFile(sassPath, sassContent, 'utf8')
      .then(() => {
        const storiesPath = join('src/components', folder, fileName, `${fileName}.stories.tsx`)
        const storiesContent = generateStories(fileName)

        outputFile(storiesPath, storiesContent, 'utf8')
          // eslint-disable-next-line no-console
          .then(() => console.log(`✅ Created '${fileName}' with Sass modules, Storybook and 'index' file.`))
          .catch((e) => console.error(e))
      })
  })
  .catch((e) => console.error(e))
