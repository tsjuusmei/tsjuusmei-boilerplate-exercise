import React from 'react'

import SubnavItem, { SubnavItemProps } from '.'
import { iconComponents, IconName } from '../Icon'

export default {
  title: 'Components / Atoms / SubnavItem',
  component: SubnavItem,
  argTypes: {
    iconName: {
      type: 'select',
      options: Object.keys(iconComponents) as IconName[]
    }
  }
}

export const Default = (args: SubnavItemProps) => <SubnavItem {...args} />

Default.args = {
  iconName: '',
  href: '/home',
  title: 'SubnavItem',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
}

