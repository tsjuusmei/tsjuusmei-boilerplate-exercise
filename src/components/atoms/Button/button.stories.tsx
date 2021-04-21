import * as React from 'react'
import Button, { ButtonProps } from '.'

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

export const Default = (args: ButtonProps) => <Button {...args} />
