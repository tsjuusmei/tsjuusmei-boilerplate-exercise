import React from 'react'
import PropTypes from 'prop-types'

function Seed({
  color = 'var(--seeds-900)',
  size = 16,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill={color}
        d="M2.5 10c0 2.761 2.865 5 6.4 5 3.738 0 6.853-2.338 8.449-3.816a1.593 1.593 0 000-2.368C15.753 7.338 12.638 5 8.9 5c-3.535 0-6.4 2.239-6.4 5z"
      />
    </svg>
  )
}

Seed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

export default Seed
