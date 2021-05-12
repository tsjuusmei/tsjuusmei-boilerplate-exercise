import * as React from 'react'

// Types
import {
  IconProps, IconRotate, IconActionSize
} from '@/components/atoms/Icon/types'

interface Props extends IconProps {
  direction?: IconRotate
}

const Chevron: React.FC<Props> = ({
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
      d="M14 5L8 11L2 5"
      stroke={color}
      strokeWidth={3}
    />
  </svg>
)

export default React.memo(Chevron)
