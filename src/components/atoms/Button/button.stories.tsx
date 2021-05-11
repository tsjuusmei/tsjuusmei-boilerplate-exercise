import * as React from 'react'
import Button, {
  ButtonProps,
  ButtonSize,
  ButtonVariation
} from '.'

const sizeOptions = Object.keys(ButtonSize).map(key => ButtonSize[key])
const sizeDefault = ButtonSize.Medium

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

export const Primary = (args: ButtonProps) => (
  <Button
    label="Primary Button"
    {...args}
  >
    Primary Button
  </Button>
)

Primary.args = {
  variation: ButtonVariation.Primary,
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
  variation: ButtonVariation.Secondary,
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
  variation: ButtonVariation.Tertiary,
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
  variation: ButtonVariation.TextLink,
  size: sizeDefault
}
