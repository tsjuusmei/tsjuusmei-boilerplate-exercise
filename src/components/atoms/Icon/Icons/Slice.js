import React from 'react'
import PropTypes from 'prop-types'

import styles from './Slice.module.scss'

const Slice = ({
  size = 16,
  isHovered = false,
  color = 'var(--flesh-500)',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    className={styles.slice}
    {...props}
  >
    { isHovered ? (
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.165 2.002c-.019-.003-.127-.004-.141.005C.34 6.259.318 13.736 7.002 17.987c.026.017.133.016.162.003l7.579-3.444c-1.044-.52-1.727-1.385-1.727-2.363 0-.948.643-1.79 1.634-2.314-.66-.615-1.053-1.384-1.053-2.219 0-.871.428-1.671 1.142-2.299-3.748-1.728-7.199-3.29-7.574-3.349zM23.253 9.31c-.042.058-.086.116-.133.173h.418c-.069-.058-.151-.111-.247-.156l-.038-.017z"
      />
    ) : (
      <path
        fill={color}
        d="M5.688 2.007c.01-.009.09-.008.104-.005.512.11 8.828 5.413 11.838 7.325.5.318.49 1.03-.015 1.343L5.791 17.99c-.021.013-.1.014-.119-.002C.766 13.736.782 6.259 5.688 2.007z"
      />
    )}
  </svg>
)

Slice.propTypes = {
  isHovered: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
}

export default Slice
