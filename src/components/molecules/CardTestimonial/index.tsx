import React from 'react'
import Image from 'next/image'

// Components
import Author from '@/components/molecules/Author'

// Types
import type { AuthorProps } from '@/components/molecules/Author'

// Styling
import styles from './card-testimonial.module.scss'

// Types
export type CardTestimonialProps = {
  author?: AuthorProps
  logo?: {
    src: string,
    alt: string
  }
  quote: string
}


const CardTestimonial: React.FC<CardTestimonialProps> = ({
  author,
  logo,
  quote
}) => (
  <section className={styles['card-testimonial']}>
    {
      logo && (
        <div className={styles['logo-wrapper']}>
          <Image
            src={logo.src}
            alt={logo.alt}
            className={styles.logo}
            width='152px'
            height='42px'
          />
        </div>
      )
    }

    <blockquote className={styles.quote}>{quote}</blockquote>

    {
      author && (
        <Author
          {...author}
          className={styles.author}
        />
      )
    }
  </section>
)

export default React.memo(CardTestimonial)
