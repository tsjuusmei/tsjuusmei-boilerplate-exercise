import React from 'react'

import CardTestimonial from '.'
import type { CardTestimonialProps } from '.'

export default {
  title: 'Components / Molecules / CardTestimonial',
  component: CardTestimonial
}

export const Default = (args: CardTestimonialProps) => <CardTestimonial {...args} />

Default.args = {
  logo: {
    src: 'https://source.unsplash.com/random/200x50',
    alt: 'Company name'
  },
  quote: 'Adabt makes our workflow much faster on a daily basis. I would recommend it 100 percent to anyone in the transport industry.',
  author: {
    avatarSrc: 'https://source.unsplash.com/random/800x600',
    avatarAlt: 'David McCoy',
    name: 'David McCoy',
    role: 'CEO'
  }
}
