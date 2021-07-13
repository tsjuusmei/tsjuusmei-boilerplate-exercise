import * as React from 'react'

// Types
import {
  IconProps,
  IconRotate,
  IconSize
} from '@/components/atoms/Icon/types'

function Chevron({
  color = 'var(--color3-500)',
  direction = IconRotate.South,
  size = IconSize.Small,
  className
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${direction}` }}
      className={className}
    >
      <path
        d="M14 5L8 11L2 5"
        stroke={color}
        strokeWidth={2}
      />
    </svg>
  )
}

export default React.memo(Chevron)
