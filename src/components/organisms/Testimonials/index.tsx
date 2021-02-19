import React, {
  useState,
  useRef,
  useEffect
} from 'react'
import Slider from 'react-slick'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisible } from 'react-hooks-visible'


// Components
import CardTestimonial from '@/components/molecules/CardTestimonial'
import ImageTestimonial from '@/components/molecules/ImageTestimonial'
import SlideIndicator from '@/components/molecules/SlideIndicator'

// Types
import type { CardTestimonialProps } from '@/components/molecules/CardTestimonial'

// Styling
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Testimonials.module.scss'

interface Slide {
  card: CardTestimonialProps,
  coverImage: {
    alt: string,
    src: string
  }
}

// Types
type TestimonialsProps = {
  title: string,
  eyebrow: string,
  description?: string
  sliderData: Slide[]
}

const Testimonials: React.FC<TestimonialsProps> = ({
  eyebrow,
  title,
  description,
  sliderData
}) => {
  const [newSlideIndex, setNewSlideIndex] = useState<number>(0)

  const sliderRef = useRef(undefined)
  const [testimonials, testimonialsVisible] = useVisible((vi: number) => vi > 0.25)

  const sliderSettings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    beforeChange: (_oldIndex: never, newIndex: React.SetStateAction<number>) => {
      setNewSlideIndex(newIndex)
    }
  }

  function setSliderIndex(index: number) {
    sliderRef?.current.slickGoTo(index)
  }

  useEffect(() => {
    testimonialsVisible
      ? sliderRef?.current.slickPlay()
      : sliderRef?.current.slickPause()
  }, [testimonialsVisible])

  return (
    <section className={styles['testimonials']} ref={(testimonials as React.MutableRefObject<HTMLElement>)}>
      <div className={styles['text-container']}>
        {
          eyebrow && (
            <p className="eyebrow">{eyebrow}</p>
          )
        }
        {
          title && (
            <h2>{title}</h2>
          )
        }
        {
          description && (
            <p className="body-md">{description}</p>
          )
        }
      </div>

      <div className={styles['slider-container']}>
        <div className={styles['slider']}>
          <Slider {...sliderSettings} ref={sliderRef}>
            {
              sliderData.map(({ coverImage: { alt, src } }, idx) => (
                <span key={idx}>
                  <ImageTestimonial src={src} alt={alt} className={styles['slider-image']} />
                </span>
              ))
            }
          </Slider>
        </div>

        <div className={styles['cards']}>
          <AnimatePresence>
            {
              sliderData.map(({ card }, idx) => (
                newSlideIndex === idx && (
                  <motion.div
                    key={idx}
                    className={styles['card-wrapper']}
                    initial={{
                      opacity: 0,
                      top: 50
                    }}
                    animate={{
                      opacity: 1,
                      top: 0,
                      zIndex: 1
                    }}
                    exit={{
                      opacity: 0,
                      scale: .95,
                      zIndex: 0,
                      top: -50,
                      position: 'absolute'
                    }}
                  >
                    <CardTestimonial
                      key={idx}
                      {...card}
                    />
                  </motion.div>
                )
              ))
            }
          </AnimatePresence>
        </div>

      </div>

      <div className={styles['slide-indicator-container']}>
        <SlideIndicator
          active={newSlideIndex}
          total={sliderData.length}
          onSelect={(index) => setSliderIndex(index)}
        />
      </div>
    </section>
  )
}

export default Testimonials
