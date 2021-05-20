import React from 'react'
import SubnavItem, { SubnavItemProps } from '.'
import {icons} from '@/components/atoms/Icon'

export default {
  title: 'Components / Atoms / SubnavItem',
  component: SubnavItem,
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: icons
      }
    }
  }
}

export const Default = (args: SubnavItemProps) => <SubnavItem {...args} />

Default.args = {
  iconName: '',
  href: '/home',
  title: 'NavDropdownItem',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
}

