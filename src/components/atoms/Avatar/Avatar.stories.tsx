import React from 'react'
import Avatar, { AvatarProps, AvatarSizes } from '.'

export default {
  title: 'Components / Atoms / Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: AvatarSizes
      }
    }
  }
}

export const Default = (args: AvatarProps) => <Avatar {...args} />

Default.args = {
  src: 'https://source.unsplash.com/random/800x600',
  alt: 'Alternative text'
}
