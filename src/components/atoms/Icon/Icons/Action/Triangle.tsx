import * as React from 'react'
import { IconProps } from '../../types'

// Define types
interface Props extends IconProps {
  direction?: 'up' | 'down'
}

// eslint-disable-next-line no-shadow
enum iconRotate {
  up = '180deg',
  down = '0deg',
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
      d="M2 5H14L8 12L2 5Z"
      fill={color}
    />
  </svg>
)

export default React.memo(Chevron)
