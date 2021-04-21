import * as React from 'react'
import { IconProps } from '../../types'

// Define types
interface Props extends IconProps {
  direction?: 'up' | 'down' | 'left' | 'right'
}

// eslint-disable-next-line no-shadow
enum iconRotate {
  up = '-180deg',
  right = '-90deg',
  down = '0deg',
  left = '90deg'
}

const Chevron: React.FC<Props> = ({
  color = 'var(--color3-500)',
  direction = 'down',
  size = 16
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${iconRotate[direction]}` }}
  >
    <path
      d="M14 5L8 11L2 5"
      stroke={color}
      strokeWidth={2}
    />
  </svg>
)

export default React.memo(Chevron)
