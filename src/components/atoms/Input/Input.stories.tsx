import React from 'react'
import Input, { InputProps, InputSize } from '.'

const sizeDefault = InputSize.Medium

export default {
  title: 'Components / Atoms / Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: InputSize
      }
    }
  }
}


export const Default = (args: InputProps) => <Input {...args} />

Default.args = {
  size: sizeDefault,
  placeholder: 'Placeholder...'
}
