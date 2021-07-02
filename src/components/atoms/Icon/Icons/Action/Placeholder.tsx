import * as React from 'react'

// Types
import { IconProps, IconSize } from '../../types'

function Placeholder({
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
        d="M3 1H1V3H3V1ZM5 1V3H7V1H5ZM9 1V3H11V1H9ZM13 1V3H15V1H13ZM15 5H13V7H15V5ZM15 9H13V11H15V9ZM15 13H13V15H15V13ZM11 15V13H9V15H11ZM7 15V13H5V15H7ZM3 15V13H1V15H3ZM1 11H3V9H1V11ZM1 7H3V5H1V7ZM9 7H11V9H9V11H7V9H5V7H7V5H9V7Z"
        fill={color}
      />
    </svg>
  )
}

export default React.memo(Placeholder)
