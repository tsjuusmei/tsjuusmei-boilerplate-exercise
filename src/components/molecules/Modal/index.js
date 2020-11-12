import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Components
import Button from '@/components/atoms/Button'

// Helpers
import useOnClickOutside from '@/hooks/useOutsideClick'
import useFocusLock from '@/hooks/useFocusLock'
import useLockBodyScroll from '@/hooks/useLockBodyScroll'
import useKeyUp from '@/hooks/useKeyUp'

// Styling
import styles from './Modal.module.scss'

const Modal = (props) => {
  const {
    children, closeModal, isOpen
  } = props

  const ref = useRef()

  useFocusLock(ref)
  useKeyUp('Escape', closeModal)
  useLockBodyScroll()
  useOnClickOutside(ref, closeModal)

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <div
          className={styles.modal}
          id="modal"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles['modal-wrapper']}
            ref={ref}
          >
            {children}

            <button
              className={styles.close}
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>,
    document.getElementById('modal-root')
  )
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default Modal
