import React from 'react'
import Checkbox, { CheckboxProps, CheckBoxSizes } from '.'

export default {
  title: 'Components / Atoms / Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: CheckBoxSizes
      }
    }
  }
}

export const Default = (args: CheckboxProps) => <Checkbox {...args} />
