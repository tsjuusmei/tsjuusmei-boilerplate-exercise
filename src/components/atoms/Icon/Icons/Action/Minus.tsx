import * as React from 'react'

// Types
import type { IconProps } from '../../types'

// Enums
import { IconActionSize } from '../../index'

function Minus({
  color = 'var(--color3-500)',
  size = IconActionSize.Small
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 8H13"
        stroke={color}
        strokeWidth={2}
      />
    </svg>
  )
}

export default React.memo(Minus)
