import React from 'react'
import Input, {InputProps} from '.'

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
}

export default {
  title: 'Components / Atoms / Input',
  component: Input
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
  hasError: false,
  isOptional: true,
  isDisabled: false,
  size: sizes.sm
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
  hasError: false,
  isOptional: false,
  isDisabled: true,
  size: sizes.md
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
  hasError: true,
  isOptional: false,
  isDisabled: false,
  size: sizes.lg
}



