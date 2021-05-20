import React from 'react'
import TextLink, { TextLinkProps } from '.'

export default {
  title: 'Components / Atoms / Link',
  component: TextLink,
  argTypes: {
    href: {
      control: {
        type: 'text'
      }
    }
  }
}

export const Internal = (args: TextLinkProps) => (
  <TextLink {...args}>
    Internal link
  </TextLink>
)

Internal.args = {
  href: '/home'
}

export const External = (args: TextLinkProps) => (
  <TextLink {...args}>
    External link
  </TextLink>
)

External.args = {
  href: 'https://www.google.com'
}
