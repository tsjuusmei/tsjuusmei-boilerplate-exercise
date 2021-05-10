import React from 'react'
import Checkbox, { CheckboxProps, CheckboxSize } from '.'

export default {
  title: 'Components / Atoms / Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: CheckboxSize
      }
    }
  }
}

export const Default = (args: CheckboxProps) => <Checkbox {...args} />

Default.args = {
  size: CheckboxSize.Small,
  label: 'This is a label'
}
