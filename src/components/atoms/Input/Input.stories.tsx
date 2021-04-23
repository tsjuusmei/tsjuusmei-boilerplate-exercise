import React from 'react'
import Input, { InputProps, InputSizes } from '.'

export default {
  title: 'Components / Atoms / Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: InputSizes
      }
    }
  }
}

export const Default = (args: InputProps) => <Input {...args} />
