import * as React from 'react'

// Types
import type { IconProps } from '../../types'

function ExternalLink({
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
        d="M4 12L12 4M12 4V11M12 4H5"
        stroke={color}
        strokeWidth={2}
      />
    </svg>
  )
}

export default React.memo(ExternalLink)
