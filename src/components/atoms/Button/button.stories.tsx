import * as React from 'react'
import Button, { ButtonProps, ButtonSize } from '.'

export default {
  title: 'Components / Atoms / Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ButtonSize
      }
    }
  }
}

export const Default = (args: ButtonProps) => <Button {...args} />
