import * as React from 'react'
import { IconProps } from '../types'

// Define types
interface Props extends IconProps {
  direction?: 'up' | 'down' | 'left' | 'right'
}

enum iconRotate {
  up = '90deg',
  right = '180deg',
  down = '-90deg',
  left = '0deg'
}

const Chevron: React.FC<Props> = ({
  color = 'var(--black)',
  size = 24,
  direction = 'down'
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    style={{ transform: `rotate(${iconRotate[direction]}` }}
  >
    <path
      fill={color}
      d="M6.079 9.47l6.073-6.074c.293-.292.768-.292 1.061 0l.709.709c.292.292.292.766 0 1.06L9.11 10l4.813 4.836c.292.293.292.767 0 1.06l-.71.708c-.292.292-.767.292-1.06 0L6.08 10.53c-.293-.293-.293-.768 0-1.06z"
    />
  </svg>
)

export default React.memo(Chevron)
