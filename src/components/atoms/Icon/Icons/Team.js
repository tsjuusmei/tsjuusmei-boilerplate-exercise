import React from 'react'
import PropTypes from 'prop-types'

function Team({
  color = 'var(--black)',
  size = 16,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M24.167 22.667a2.667 2.667 0 10-.001-5.333 2.667 2.667 0 00.001 5.333zm-16 0a2.667 2.667 0 10-.001-5.333 2.667 2.667 0 00.001 5.333zm-5.334 8c0-2.21 1.79-4 4-4H9.5c2.21 0 4 1.79 4 4m5.333 0c0-2.21 1.79-4 4-4H25.5c2.21 0 4 1.79 4 4m-5.333-24a2.667 2.667 0 10-.001-5.333 2.667 2.667 0 00.001 5.333zM19.852 12a3.99 3.99 0 012.981-1.333H25.5c1.184 0 2.25.515 2.981 1.333M8.167 6.667a2.667 2.667 0 10-.001-5.333 2.667 2.667 0 00.001 5.333zM3.852 12a3.99 3.99 0 012.981-1.333H9.5c1.184 0 2.25.515 2.981 1.333"
      />
    </svg>
  )
}

Team.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

export default Team
