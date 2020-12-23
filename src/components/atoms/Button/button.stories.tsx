import * as React from 'react'
import Button from '.'

const sizeOptions = ['sm', 'md', 'lg']
const sizeDefault = 'md'

export default {
  title: 'Components / Atoms / Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizeOptions
      }
    }
  }
}

export const Primary = (args) => (
  <Button
    label="Primary Button"
    {...args}
  >
    {args.buttonText}
  </Button>
)

Primary.args = {
  variation: 'primary',
  size: sizeDefault,
  buttonText: 'Primary Button'
}

export const Secondary = (args) => (
  <Button
    label="Secondary Button"
    {...args}
  >
    {args.buttonText}
  </Button>
)

Secondary.args = {
  variation: 'secondary',
  size: sizeDefault,
  buttonText: 'Secondary Button'
}

export const Tertiary = (args) => (
  <Button
    label="Tertiary Button"
    {...args}
  >
    {args.buttonText}
  </Button>
)

Tertiary.args = {
  variation: 'tertiary',
  size: sizeDefault,
  buttonText: 'Tertiary Button'
}

export const TextLink = (args) => (
  <Button
    label="Text Link"
    {...args}
  >
    {args.buttonText}
  </Button>
)

TextLink.args = {
  variation: 'text-link',
  size: sizeDefault,
  buttonText: 'Text Link'
}
