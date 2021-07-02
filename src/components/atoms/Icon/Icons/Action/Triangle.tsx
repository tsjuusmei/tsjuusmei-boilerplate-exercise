import * as React from 'react'

import {
  IconProps, IconSize, IconRotate
} from '@/components/atoms/Icon/types'

const Trianlge: React.FC<IconProps> = ({
  color = 'var(--color3-500)',
  direction = IconRotate.South,
  size = IconSize.Small,
  className
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${IconRotate[direction]}` }}
    className={className}
  >
    <path
      d="M2 5H14L8 12L2 5Z"
      fill={color}
    />
  </svg>
)

export default React.memo(Trianlge)
