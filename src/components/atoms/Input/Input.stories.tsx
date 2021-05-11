import React from 'react'
import Input, { InputProps, InputSize } from '.'

const sizeOptions = Object.keys(InputSize).map(key => InputSize[key])
const sizeDefault = InputSize.Medium

export default {
  title: 'Components / Atoms / Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizeOptions
      }
    }
  }
}

export const Default = (args: InputProps) => (
  <Input
    id='input-1'
    name='input-1'
    {...args}
  />
)

Default.args = {
  placeholder: 'Doe is',
  type:'text',
  label: 'Input field with label',
  isError: false,
  isOptional: true,
  isDisabled: false,
  size: sizeDefault
}

export const Disabled = (args: InputProps) => (
  <Input
    id='input-2'
    name='input-2'
    {...args}
  />
)

Disabled.args = {
  placeholder: 'Doe is',
  type:'text',
  label: 'Input field with label',
  isError: false,
  isOptional: false,
  isDisabled: true,
  size: sizeDefault
}

export const Error = (args: InputProps) => (
  <Input
    id='input-3'
    name='input-3'
    {...args}/>
)

Error.args = {
  placeholder: 'Doe is',
  type:'text',
  label: 'Input field with label',
  isError: true,
  isOptional: false,
  isDisabled: false,
  size: sizeDefault
}
