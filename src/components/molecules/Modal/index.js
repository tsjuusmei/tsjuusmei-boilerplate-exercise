import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

// Helpers
import useOnClickOutside from '@/hooks/outsideClick'

// Components
import Icon from '../../atoms/Icon'

// Styling
import './modal.scss'

function Modal({
  children,
  isOpen,
  closeModal
}) {
  const modalContentRef = useRef(null)

  useOnClickOutside(modalContentRef, closeModal)

  useEffect(() => {
    document.addEventListener('keydown', handleClose)

    return () => {
      document.removeEventListener('keydown', handleClose)
    }
  })

  const handleClose = (e) => {
    if (e.keyCode === 27 || e.key === 'Escape' || e.code === 'Escape') {
      closeModal()
    }
  }

  if (typeof window !== 'undefined') {
    return (
      ReactDOM.createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="modal"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: 'easeIn'
              }}
            >
              <motion.div
                className="modal-wrapper"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                ref={modalContentRef}
              >
                {children}
              </motion.div>
              <div
                className="close"
                onClick={closeModal}
              >
                <Icon
                  name="cross"
                  size={32}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById('modal-root')
      )
    )
  }

  return null
}

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.string,
  closeModal: PropTypes.func.isRequired
}

export default Modal
