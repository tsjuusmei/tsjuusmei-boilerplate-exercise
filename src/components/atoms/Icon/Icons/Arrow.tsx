import * as React from 'react'
import { IconProps } from '../types'

const Arrow: React.FC<IconProps> = ({
  color = 'var(--black)',
  size = 24
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className="icon icon-arrow"
  >
    <path
      stroke={color}
      d="M18 12L14 8L12 6M18 12L14 16L12 18M18 12L6 12"
    />
  </svg>
)

export default React.memo(Arrow)
