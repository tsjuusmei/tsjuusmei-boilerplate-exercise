import * as React from 'react'

// Types
import type { IconProps } from '../../types'

function Plus({
  color = 'var(--color3-500)',
  size = 16
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 3V8M8 13V8M8 8H3M8 8H13"
        stroke={color}
        strokeWidth={2}
      />
    </svg>
  )
}

export default React.memo(Plus)
