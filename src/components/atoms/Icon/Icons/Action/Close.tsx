import * as React from 'react'

// Types
import type { IconProps } from '../../types'

// Enums
import { IconActionSize } from '../../index'

function Close({
  color = 'var(--color3-500)',
  size = IconActionSize.Small
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7266 3.33325L7.99992 7.05992L4.27325 3.33325L3.33325 4.27325L7.05992 7.99992L3.33325 11.7266L4.27325 12.6666L7.99992 8.93992L11.7266 12.6666L12.6666 11.7266L8.93992 7.99992L12.6666 4.27325L11.7266 3.33325Z"
        fill={color}
      />
    </svg>
  )
}

export default React.memo(Close)
