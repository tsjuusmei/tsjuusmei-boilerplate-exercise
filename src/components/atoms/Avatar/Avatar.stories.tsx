import React from 'react'
import Avatar, { AvatarProps, AvatarSize } from '.'

const sizeOptions = Object.keys(AvatarSize).map(key => AvatarSize[key])
const sizeDefault = AvatarSize.Medium
const alt = 'A description of an avatar image.'

export default {
  title: 'Components / Atoms / Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizeOptions
      }
    },
    className: { control: { disable: true } }
  }
}

export const Single = (args: AvatarProps) => (
  <Avatar {...args} />
)

Single.args = {
  src: 'https://source.unsplash.com/random/800x600',
  size: sizeDefault,
  alt: 'A description of an avatar image.'
}

export const Overview = () => (
  <div>
    {sizeOptions.map((size, idx) => (
      <div key={idx}>
        <Avatar
          alt={alt}
          size={size}
          src={'https://source.unsplash.com/random/800x600'}
        />
        <p>{size}</p>
      </div>
    ))}
  </div>
)
