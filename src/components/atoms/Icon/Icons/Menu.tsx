import * as React from 'react'
import { IconProps } from '../types'

const Menu: React.FC<IconProps> = ({
  color = 'var(--black-000)',
  size = 24
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className="icon icon-menu"
  >
    <path
      fill={color}
      d="M40 12H8V20H40V12ZM40 28H8V36H40V28Z"
    />
  </svg>
)

export default React.memo(Menu)
