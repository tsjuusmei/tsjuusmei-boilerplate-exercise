import React from 'react'
import Input, { InputProps } from '.'

export default {
  title: 'Components / Atoms / Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    }
  }
}

export const Default = (args: InputProps) => <Input {...args} />
