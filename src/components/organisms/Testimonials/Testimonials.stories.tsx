import React from 'react'

import Testimonials, { TestimonialsProps } from '.'

export default {
  title: 'Components / Organisms / Testimonials',
  component: Testimonials
}

export const Default = (args: JSX.IntrinsicAttributes & TestimonialsProps & { children?: React.ReactNode }) => (
  <Testimonials {...args} />
)

Default.args = {
  title: 'Testimonials',
  eyebrow: 'Customers who trust Adabt',
  description: 'Adabt makes our workflow much faster on a daily basis. I would recommend it 100 percent to anyone in the transport industry.',
  sliderData: [
    {
      card: {
        logo: {
          src: '/img/misc/logo-ipsum.svg',
          alt: 'Company name'
        },
        quote: 'Adabt makes our workflow much faster on a daily basis. I would recommend it 100 percent to anyone in the transport industry.',
        author: {
          avatarSrc: 'https://source.unsplash.com/random/200x200',
          avatarAlt: 'David McCoy',
          name: 'David McCoy',
          role: 'CEO'
        }
      },
      coverImage: {
        alt: 'Placeholder',
        src: 'https://source.unsplash.com/random/684x380'
      }
    },
    {
      card: {
        logo: {
          src: '/img/misc/logo-ipsum.svg',
          alt: 'Company name'
        },
        quote: 'Curabitur malesuada lorem at luctus posuere. Duis ut lacus dictum quam sodales lobortis. Maecenas sodales enim id enim pellentesque.',
        author: {
          avatarSrc: 'https://source.unsplash.com/random/200x200',
          avatarAlt: 'David McCoy',
          name: 'David McCoy',
          role: 'CEO'
        }
      },
      coverImage: {
        alt: 'Placeholder',
        src: 'https://source.unsplash.com/random/684x380'
      }
    },
    {
      card: {
        logo: {
          src: '/img/misc/logo-ipsum.svg',
          alt: 'Company name'
        },
        quote: 'Adabt makes our workflow much faster on a daily basis. I would recommend it 100 percent to anyone in the transport industry.',
        author: {
          avatarSrc: 'https://source.unsplash.com/random/200x200',
          avatarAlt: 'David McCoy',
          name: 'David McCoy',
          role: 'CEO'
        }
      },
      coverImage: {
        alt: 'Placeholder',
        src: 'https://source.unsplash.com/random/684x380'
      }
    },
  ]
}
