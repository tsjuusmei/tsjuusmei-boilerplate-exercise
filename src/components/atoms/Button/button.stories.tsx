import * as React from 'react'
import Button, { ButtonProps, ButtonSizes } from '.'

export default {
  title: 'Components / Atoms / Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ButtonSizes
      }
    }
  }
}

export const Default = (args: ButtonProps) => <Button {...args} />
