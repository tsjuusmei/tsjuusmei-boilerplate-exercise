import * as React from 'react'

import { IconProps, IconSize } from '../../types'

function Warning({
  color = 'var(--color3-500)',
  size = IconSize.Medium,
  className
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`warning icon-warning ${className}`}
    >
      <path
        fill={color}
        d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z"
      />
    </svg>
  )
}

export default React.memo(Warning)
