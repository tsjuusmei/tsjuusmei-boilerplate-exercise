import * as React from 'react'
import Button, { ButtonProps } from '.'

const sizeDefault = 'md'

export default {
  title: 'Components / Atoms / Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    }
  }
}

export const Primary = (args: ButtonProps) => (
  <Button
    label="Primary Button"
    {...args}
  >
    Primary Button
  </Button>
)

Primary.args = {
  variation: 'primary',
  size: sizeDefault
}

export const Secondary = (args: ButtonProps) => (
  <Button
    label="Secondary Button"
    {...args}
  >
    Secondary Button
  </Button>
)

Secondary.args = {
  variation: 'secondary',
  size: sizeDefault
}

export const Tertiary = (args: ButtonProps) => (
  <Button
    label="Tertiary Button"
    {...args}
  >
    Tertiary Button
  </Button>
)

Tertiary.args = {
  variation: 'tertiary',
  size: sizeDefault
}

export const TextLink = (args: ButtonProps) => (
  <Button
    label="Text Link"
    {...args}
  >
    Text Link
  </Button>
)

TextLink.args = {
  variation: 'text-link',
  size: sizeDefault
}
