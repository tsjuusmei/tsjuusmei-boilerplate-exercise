import React from 'react'
import Avatar, { AvatarProps, AvatarSize } from '.'

const sizeDefault = AvatarSize.Medium

export default {
  title: 'Components / Atoms / Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: AvatarSize
      }
    },
    className: { control: { disable: true } }
  }
}

export const Default = (args: AvatarProps) => (
  <Avatar {...args} />
)

Default.args = {
  src: 'https://source.unsplash.com/random/800x600',
  size: sizeDefault,
  alt: 'A description of an avatar image.'
}
