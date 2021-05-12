import React from 'react'
import Author, { AuthorProps } from '.'

export default {
  title: 'Components / Molecules / Author',
  component: Author,
  argTypes: {
    className: { control: { disable: true } }
  }
}

export const Default = (args: AuthorProps) => (
  <Author {...args} />
)

Default.args = {
  avatarSrc: 'https://source.unsplash.com/random/800x600',
  avatarAlt: 'David McCoy',
  name: 'David McCoy',
  role: 'CEO'
}
