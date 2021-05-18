import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Icon from '@/components/atoms/Icon'

// Types
import { IconRotate } from '@/components/atoms/Icon/types'

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
  const totalVariants = {
    open: {
      maxHeight: '1000px',
      transition: {
        duration: 0.65,
        type: 'tween',
        ease: 'easeInOut',
      }
    },
    closed: {
      maxHeight: '64px',
      transition: {
        duration: 0.65,
        type: 'tween',
        ease: 'easeInOut',
      }
    }
  }

  const itemVars = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.65,
        type: 'tween',
        ease: 'easeInOut',
      }
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.65,
        type: 'tween',
        ease: 'easeInOut',
      }
    }
  }

  const [isOpen, setIsOpen] = useState(false)
  function toggleIsOpen(e: { preventDefault: () => void }) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <motion.details
      className={styles.details}
      open={isOpen}
      onClick={toggleIsOpen}
      variants={totalVariants}
      animate={isOpen? 'open': 'closed'}
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
            direction={isOpen ? IconRotate.Up : IconRotate.Down}
            size={24}
          />
        </h5>
      </summary>
      <AnimatePresence>
        <motion.p
          variants={itemVars}
          className={`${hasIcon ? 'has-icon' : ''}`}
        >{body}</motion.p>
      </AnimatePresence>
    </motion.details>
  )
}

export default Disclosure
