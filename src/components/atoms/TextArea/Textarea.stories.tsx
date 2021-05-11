import React from 'react'
import Textarea, { TextareaProps, TextareaSize } from '.'

const sizeOptions = Object.keys(TextareaSize).map(key => TextareaSize[key])
const sizeDefault = TextareaSize.Medium

export default {
  title: 'Components / Atoms / Textarea',
  component: Textarea,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizeOptions
      }
    }
  }
}

export const Default = (args: TextareaProps) => (
  <Textarea
    id='textarea-1'
    name='textarea-1'
    {...args}
  />
)

Default.args = {
  placeholder: 'Doe is',
  type:'text',
  label: 'Textarea field with label',
  isError: false,
  isOptional: true,
  isDisabled: false,
  size: sizeDefault
}

export const Disabled = (args: TextareaProps) => (
  <Textarea
    id='textarea-2'
    name='textarea-2'
    {...args}
  />
)

Disabled.args = {
  placeholder: 'Doe is',
  type:'text',
  label: 'Textarea field with label',
  isError: false,
  isOptional: false,
  isDisabled: true,
  size: sizeDefault
}

export const Error = (args: TextareaProps) => (
  <Textarea
    id='textarea-3'
    name='textarea-3'
    {...args}/>
)

Error.args = {
  placeholder: 'Doe is',
  type:'text',
  label: 'Textarea field with label',
  isError: true,
  isOptional: false,
  isDisabled: false,
  size: sizeDefault
}
