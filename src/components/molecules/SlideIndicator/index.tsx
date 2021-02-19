import React from 'react'

// Styling
import styles from './slide-indicator.module.scss'

// Types
interface onSelectFunc {
  (index: number): void
}

export type Props = {
  active?: number
  total: number
  onSelect: onSelectFunc
}

const SlideIndicator: React.FC<Props> = ({
  active = 0,
  total,
  onSelect
}) => (
  <section className={styles['slide-indicator']}>
    {
      [...Array(total)].map((_, idx) => (
        <button
          key={idx}
          className={`${styles.indicator} ${active === idx ? styles.active : ''}`}
          aria-label={`Show slide ${idx}`}
          onPointerUp={() => onSelect(idx)}
        />
      ))
    }
  </section>
)

export default SlideIndicator
