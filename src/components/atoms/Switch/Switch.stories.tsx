import React from 'react'
import Switch, { SwitchProps, SwitchSize } from '.'

export default {
  title: 'Components / Atoms / Switch',
  component: Switch,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: SwitchSize
      }
    }
  }
}

export const Default = (args: SwitchProps) => <Switch {...args} />

Default.args = {
  size: SwitchSize.Medium
}
