import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Helpers
import useOnClickOutside from '@/hooks/useOutsideClick'

// Components
import Icon from '@/components/atoms/Icon'

// Styling
import styles from './Modal.module.scss'

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

  useEffect(() => {
    const handleTab = (e) => {
      const isTabPressed = e.key === 'Tab'

      console.log(isTabPressed)

      // console.log(isTabPressed)

      // console.log(firstFocusableElement, lastFocusableElement)

      // if (!isTabPressed) {
      //   return
      // }

      // if (isTabPressed) { // if shift key pressed for shift + tab combination
      //   if (document.activeElement === firstFocusableElement) {
      //     lastFocusableElement.focus() // add focus for the last focusable element
      //     e.preventDefault()
      //   }
      // } else { // if tab key is pressed
      //   console.log('tab!')
      //   if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      //     firstFocusableElement.focus() // add focus for the first focusable element
      //     e.preventDefault()
      //   }
      // }
    }

    if (isOpen) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      const modal = document.getElementById('modal') // select the modal by it's id

      const firstFocusableElement = modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal
      const focusableContent = modal.querySelectorAll(focusableElements)
      const lastFocusableElement = focusableContent[focusableContent.length - 1]

      document.addEventListener('keydown', handleTab)
    }

    // if (isOpen) {
    //   document.getElementById('modal-root').focus()
    // } else {
    //   document.getElementById('modal-root').blur()
    // }

    return document.removeEventListener('keydown', handleTab)
  }, [isOpen])

  const handleClose = (e) => {
    if (e.keyCode === 27 || e.key === 'Escape' || e.code === 'Escape') {
      closeModal()
    }
  }

  if (typeof window !== 'undefined') {
    return (
      ReactDOM.createPortal(
        <>
          {isOpen && (
            <div
              className={styles.modal}
              id="modal"
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
              <div
                className={styles['modal-wrapper']}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                ref={modalContentRef}
              >
                {children}
              </div>
              <div
                className={styles.close}
                onClick={closeModal}
              >
                X
              </div>
            </div>
          )}
        </>,
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
