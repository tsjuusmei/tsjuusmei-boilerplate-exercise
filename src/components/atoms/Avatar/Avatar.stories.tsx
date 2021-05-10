import React from 'react'
import Avatar, { AvatarProps, AvatarSize } from '.'

export default {
  title: 'Components / Atoms / Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: AvatarSize
      }
    }
  }
}

export const Default = (args: AvatarProps) => <Avatar {...args} />

Default.args = {
  src: 'https://source.unsplash.com/random/800x600',
  alt: 'Alternative text'
}
