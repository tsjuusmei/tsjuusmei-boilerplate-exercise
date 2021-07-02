import * as React from 'react'

// Types
import { IconProps, IconSize } from '../../types'

function Minus({
  color = 'var(--color3-500)',
  size = IconSize.Medium,
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
    >
      <path
        d="M3 8H13"
        stroke={color}
        strokeWidth={2}
      />
    </svg>
  )
}

export default React.memo(Minus)
