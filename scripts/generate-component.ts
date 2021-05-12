import { prompt } from 'enquirer'
import { outputFile } from 'fs-extra'

const PascalCase = /([A-Z][a-z0-9]+)((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/

async function survey() {
  const answers = await prompt([
    {
      type: 'select',
      name: 'type',
      message: 'What is the atomic design type?',
      choices: ['Atoms', 'Molecules', 'Organisms'],
    },
    {
      type: 'input',
      name: 'component',
      message: 'What is the name of the component?',
      initial: 'ComponentName',
      validate: (answer) => {
        if (answer.match(PascalCase) && answer !== 'ComponentName') {
          return true
        } else {
          return 'Make sure you\'ve entered a unique component name in PascalCase.'
        }
      },
      choices: ['Atoms', 'Molecules', 'Organisms'],
    },
    {
      type: 'confirm',
      name: 'stories',
      initial: 'Y',
      message: 'Create Stories for this component?',
    },
  ])

  const {
    component, type, stories
  } = answers as any

  const _type: string = type.toLowerCase()
  console.log('\n')
  console.log(`Creating a new ${_type.replace('s', '')}...`)

  const path = `src/components/${_type}/${component}`

  createComponent(path, component)
  createStyles(path, component)
  if (stories) {
    createStories(path, component, type)
  }
}

async function createComponent(path: string, component: string): Promise<void> {
  const location = `${path}/index.tsx`
  const template = `import React from 'react'

// Types
export type ${component}Props = {
  name?: string
}

// Styling
import styles from './${component}.module.scss'

const ${component}: React.FC<${component}Props> = ({ name = '${component}' }) => (
  <div className={styles['${component.toLowerCase()}']}>
    <p>{name}</p>
  </div>
)

export default ${component}`

  try {
    await outputFile(location, template)
    console.log(`✔ Created ${component} → ${location}`)
  } catch (error) {
    console.error(error)
  }
}

async function createStories(
  path: string,
  component: string,
  type: string
): Promise<void> {
  const location = `${path}/${component}.stories.tsx`

  const template = `import React from 'react'

import ${component}, { ${component}Props } from '.'

export default {
  title: 'Components / ${type} / ${component}',
  component: ${component}
}

export const Default = (args: ${component}Props) => <${component} {...args} />
Default.args = {}
`

  try {
    await outputFile(location, template)
    console.log(`✔ Created Stories → ${location}`)
  } catch (error) {
    console.error(error)
  }
}

async function createStyles(path: string, component: string): Promise<void> {
  const location = `${path}/${component}.module.scss`
  const template = `.${component.toLowerCase()} {
  color: red;  
}`

  try {
    await outputFile(location, template)
    console.log(`✔ Created Styles → ${location}`)
  } catch (error) {
    console.error(error)
  }
}

survey()
