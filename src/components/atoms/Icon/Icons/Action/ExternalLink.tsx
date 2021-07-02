import * as React from 'react'

// Types
import { IconProps, IconSize } from '../../types'

function ExternalLink({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0001 11V5V3H11.0001H5.00008V5H9.58586L3.29297 11.2929L4.70718 12.7071L11.0001 6.41421V11H13.0001Z"
        fill={color}
      />
    </svg>
  )
}

export default React.memo(ExternalLink)
