import * as React from 'react'

import {
  IconProps, IconActionSize, IconRotate
} from '@/components/atoms/Icon/types'

const Trianlge: React.FC<IconProps> = ({
  color = 'var(--color3-500)',
  direction = IconRotate.Down,
  size = IconActionSize.Small
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${IconRotate[direction]}` }}
  >
    <path
      d="M2 5H14L8 12L2 5Z"
      fill={color}
    />
  </svg>
)

export default React.memo(Trianlge)
