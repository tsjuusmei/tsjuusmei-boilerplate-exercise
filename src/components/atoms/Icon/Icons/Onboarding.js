import React from 'react'
import PropTypes from 'prop-types'

function Onboarding({
  color = 'var(--black)',
  size = 16,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M12 26.666h17.333M12 16h17.333M12 5.333h17.333M2.667 2.667H4v6.666m-2.667 5.333H4c.55 0 .863.627.533 1.067l-2.4 3.2A.667.667 0 002.667 20h2.666m-4 5.333h3.334c.368 0 .666.299.666.667v4a.666.666 0 01-.666.666H1.333m2-2.666h2"
      />
    </svg>
  )
}

Onboarding.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

export default Onboarding
