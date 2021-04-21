import React from 'react'
import Avatar, { AvatarProps } from '.'

export default {
  title: 'Components / Atoms / Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xsm', 'sm', 'md', 'lg', 'xlg', 'xxlg', 'xxxlg']
      }
    },
    className: { control: { disable: true } }
  }
}

export const Default = (args: AvatarProps) => <Avatar {...args} />
