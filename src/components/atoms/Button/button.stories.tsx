import * as React from 'react'
import Button, {
  ButtonProps,
  ButtonSize,
  ButtonVariation
} from '.'

const sizeDefault = ButtonSize.Medium

export default {
  title: 'Components / Atoms / Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ButtonSize
      }
    },
    variation: {
      control: {
        type: 'select',
        options: ButtonVariation
      }
    }
  }
}

export const Default = (args: ButtonProps) => (
  <Button {...args}>
    Button
  </Button>
)

Default.args = {
  variation: ButtonVariation.Primary,
  size: sizeDefault
}
