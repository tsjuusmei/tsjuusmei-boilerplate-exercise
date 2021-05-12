import { outputFile } from 'fs-extra'
import { join } from 'path'

const folder = process.argv[2] || 'atoms'
const fileName = process.argv[3] || 'example'

const generateComponent = (name: string) => {
  const sub = name.substr(name.lastIndexOf('/') + 1)
  const funcName = sub.charAt(0).toUpperCase() + sub.slice(1)

  return (
    `import React from 'react'

// Types
type ${funcName}Props = {
  name?: string
}

// Styling
import styles from './${name}.module.scss'

const ${funcName}: React.FC<${funcName}Props> = ({ name }) => (
  <div className={styles['${name}']}>
    <p>{name}</p>
  </div>
)

export default ${funcName}
`
  )
}

const generateStories = (name: string) => {
  const sub = name.substr(name.lastIndexOf('/') + 1)
  const funcName = sub.charAt(0).toUpperCase() + sub.slice(1)
  const folderName = folder.charAt(0).toUpperCase() + folder.slice(1)

  return (
    `import React from 'react'

import ${funcName} from '.'

export default {
  title: 'Components / ${folderName} / ${funcName}',
  component: ${funcName}
}

export const Default = (args) => <${funcName} {...args} />
Default.args = {}
`
  )
}

const generateCss = (name: string) => (
  `.${name} {
  color: red;
}
`
)

const filePath = join('src/components', folder, fileName, 'index.tsx')
const content = generateComponent(fileName)

outputFile(filePath, content, 'utf8')
  .then(() => {
    const sassPath = join('src/components', folder, fileName, `${fileName}.module.scss`)
    const sassContent = generateCss(fileName)

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
