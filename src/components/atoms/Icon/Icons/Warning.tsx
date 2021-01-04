import * as React from 'react'
import { IconProps } from '../types'

const Warning: React.FC<IconProps> = ({
  color = 'var(--error-500)',
  size = 24
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className="icon icon-warning"
  >
    <path
      fill={color}
      d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z"
    />
  </svg>
)

export default React.memo(Warning)
