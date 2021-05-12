import React, { useState } from 'react'

// Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from './Disclosure.module.scss'

export type DisclosureProps = {
  summary: string,
  body: string,
  hasIcon?: boolean
}

const Disclosure: React.FC<DisclosureProps> = ({
  summary,
  body,
  hasIcon = false
}) => {
  const [isOpen, setIsOpen] = useState(false)
  function toggleIsOpen(e: { preventDefault: () => void }) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <details
      className={styles.details}
      open={isOpen}
      onClick={toggleIsOpen}
    >
      <summary>
        <h5>
          {hasIcon &&
            <>
              <Icon name="minus" size={24} />
              <Icon name="plus" size={24} />
            </>
          }
          {summary}
          <Icon
            name="chevron"
            direction={isOpen ? 'up' : 'down'}
            size={24}
          />
        </h5>
      </summary>
      <p className={`${hasIcon ? 'has-icon' : ''}`}>{body}</p>
    </details>
  )
}

export default Disclosure
