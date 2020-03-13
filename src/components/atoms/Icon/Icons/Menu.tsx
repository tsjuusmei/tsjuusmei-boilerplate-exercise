import * as React from 'react'

type Props = {
  color?: string,
  size?: number
}

const Menu: React.FunctionComponent<Props> = ({
  color = '#fff',
  size = 16
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className="icon icon-menu"
  >
    <path
      fill={color || '#fff'}
      d="M40 12H8V20H40V12ZM40 28H8V36H40V28Z"
    />
  </svg>
)

export default Menu
