import * as React from 'react'

// Define types
import {
  IconProps,
  IconRotate,
  IconSize
} from '../../types'

function Chevron({
  color = 'var(--color3-500)',
  direction= IconRotate.South,
  size = IconSize.Large,
  className
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${direction}` }}
    >
      <path
        d="M2 5H14L8 12L2 5Z"
        fill={color}
      />
    </svg>
  )
}

export default React.memo(Chevron)
