import React from 'react'
import Switch, { SwitchProps } from '.'

export default {
  title: 'Components / Atoms / Switch',
  component: Switch,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    }
  }
}

export const Default = (args: SwitchProps) => <Switch {...args} />

Default.args = {
  label: 'Label',
  size: 'sm'
}
