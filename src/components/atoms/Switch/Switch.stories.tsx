import React from 'react'
import Switch, { SwitchProps, SwitchSizes } from '.'

export default {
  title: 'Components / Atoms / Switch',
  component: Switch,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: SwitchSizes
      }
    }
  }
}

export const Default = (args: SwitchProps) => <Switch {...args} />
