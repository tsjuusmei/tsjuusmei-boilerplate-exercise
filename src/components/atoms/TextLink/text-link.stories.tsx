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
    Interne link
  </TextLink>
)

Internal.args = {
  href: '/home'
}

export const External = (args: TextLinkProps) => (
  <TextLink {...args}>
    Externe link
  </TextLink>
)

External.args = {
  href: 'https://www.google.com'
}
