import * as React from 'react'
import { IconProps } from '../../types'

const Warning: React.FC<IconProps> = ({
  color = 'var(--color3-500)',
  size = 16
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.444336 14.2222H15.5554L7.99989 0.888916L0.444336 14.2222ZM8.88878 12.4445H7.111V10.6667H8.88878V12.4445ZM8.88878 9.77781H7.111V6.22225H8.88878V9.77781Z"
      fill={color}
    />
  </svg>
)

export default Warning
