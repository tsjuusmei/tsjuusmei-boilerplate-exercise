import React from 'react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Components / Atoms / Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    }
  }
}

export const Primary = (args: CheckboxProps) => <Checkbox {...args} />

Primary.args = {
  size: 'md',
  label: 'Label'
}