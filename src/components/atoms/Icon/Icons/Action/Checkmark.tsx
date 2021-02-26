import * as React from 'react'

// Types
import type { IconProps } from '../../types'

function Checkmark({
  color = 'var(--color3-500)',
  size = 16
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8.23858L6.4 13L14 3"
        stroke={color}
        strokeWidth={3}
      />
    </svg>
  )
}

export default React.memo(Checkmark)
