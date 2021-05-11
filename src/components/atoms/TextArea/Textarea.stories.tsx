import React from 'react'
import TextArea, { TextAreaProps, TextAreaSize } from '.'

const sizeOptions = Object.keys(TextAreaSize).map(key => TextAreaSize[key])
const sizeDefault = TextAreaSize.Medium

export default {
  title: 'Components / Atoms / TextArea',
  component: TextArea,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizeOptions
      }
    }
  }
}

export const Default = (args: TextAreaProps) => (
  <TextArea
    id='textarea-1'
    name='textarea-1'
    {...args}
  />
)

Default.args = {
  placeholder: 'Doe is',
  type:'text',
  label: 'TextArea field with label',
  isError: false,
  isOptional: true,
  isDisabled: false,
  size: sizeDefault
}

export const Disabled = (args: TextAreaProps) => (
  <TextArea
    id='textarea-2'
    name='textarea-2'
    {...args}
  />
)

Disabled.args = {
  placeholder: 'Doe is',
  type:'text',
  label: 'TextArea field with label',
  isError: false,
  isOptional: false,
  isDisabled: true,
  size: sizeDefault
}

export const Error = (args: TextAreaProps) => (
  <TextArea
    id='textarea-3'
    name='textarea-3'
    {...args}/>
)

Error.args = {
  placeholder: 'Doe is',
  type:'text',
  label: 'TextArea field with label',
  isError: true,
  isOptional: false,
  isDisabled: false,
  size: sizeDefault
}
