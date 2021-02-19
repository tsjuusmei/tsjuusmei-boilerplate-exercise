import * as React from "react"
import { IconProps } from '../types'

const Check: React.FC<IconProps> = ({
  color = 'var(--white-000)',
  width = 22,
  height = 20
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.25 9.644L8.308 17.5 20.5 1" stroke={color} strokeWidth={3} />
    </svg>
  )
}

export default React.memo(Check)
