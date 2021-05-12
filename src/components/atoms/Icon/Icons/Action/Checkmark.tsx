import * as React from 'react'

// Types
import { IconProps, IconActionSize } from '@/components/atoms/Icon/types'

function Checkmark({
  color = 'var(--color3-500)',
  size = IconActionSize.Small,
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
      <path d="M2 8.239L6.4 13 14 3" stroke={color} strokeWidth={2} />
    </svg>
  )
}

export default React.memo(Checkmark)
