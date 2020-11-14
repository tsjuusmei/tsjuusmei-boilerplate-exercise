import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

// Helpers
import useOnClickOutside from '@/hooks/useOutsideClick'
import useFocusLock from '@/hooks/useFocusLock'
import useLockBodyScroll from '@/hooks/useLockBodyScroll'
import useKeyUp from '@/hooks/useKeyUp'

// Styling
import styles from './Modal.module.scss'

// Types
type Props = {
  children: any,
  closeModal: any,
  isOpen: boolean
}

const modalRoot = document.querySelector("#modal-root") as HTMLElement

const Modal: React.FC<Props> = ({
  children,
  closeModal,
  isOpen
}) => {
  const el = useRef(document.createElement("div"))
  const ref = useRef(null)

  useFocusLock(ref)
  useKeyUp('Escape', closeModal)
  useLockBodyScroll()
  useOnClickOutside(ref, closeModal)

  useEffect(() => {
    // We assume `modalRoot` exists with '!'
    modalRoot!.appendChild(el.current)
    return () => void modalRoot!.removeChild(el.current)
  }, [])

  return createPortal(
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
    el.current
  )
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default Modal
