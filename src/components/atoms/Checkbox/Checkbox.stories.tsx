import React from 'react'
import Checkbox, { CheckboxProps } from '.'

const sizeOptions = ['sm', 'md', 'lg']
const sizeDefault = 'md'

export default {
  title: 'Components / Atoms / Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizeOptions
      }
    }
  }
}

export const Primary = (args: CheckboxProps) => (
  <Checkbox {...args} />
)

Primary.args = {
  size: sizeDefault,
  label: 'Label'
}