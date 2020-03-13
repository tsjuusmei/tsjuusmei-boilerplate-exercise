import * as React from 'react'

type Props = {
  color?: string,
  size?: number
}

const Plus: React.FunctionComponent<Props> = ({
  color = '#fff',
  size = 16,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className="icon icon-plus"
    {...props}
  >
    <path
      fill={color}
      d="M30 4H18V18L4 18V30H18V44H30V30H44V18L30 18V4Z"
    />
  </svg>
)

export default Plus
