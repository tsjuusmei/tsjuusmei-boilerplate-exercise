import * as React from 'react'

import {
  IconProps,
  IconRotate,
  IconSize
} from '../../types'

function Chevron({
  color = 'var(--color3-500)',
  direction = IconRotate.South,
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
        d="M14 5L8 11L2 5"
        stroke={color}
        strokeWidth={3}
      />
    </svg>
  )
}

export default React.memo(Chevron)
