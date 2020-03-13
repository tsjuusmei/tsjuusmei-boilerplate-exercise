import * as React from 'react'
import Link from 'next/link'

// Styles
import './button.scss'

type Props = {
  variation: 'primary' | 'secondary' | 'tertiary',
  size: 's' | 'm' | 'l',
  isDisabled?: boolean,
  children?: any,
  onClick?: React.MouseEventHandler<HTMLElement>,
  url?: string,
  to?: string
}

const Button: React.FunctionComponent<Props> = ({
  variation = 'primary',
  size = 'm',
  isDisabled,
  children,
  onClick,
  url,
  to
}) => (
  to ? (
    <Link href={to}>
      <button
        type="button"
        onClick={onClick}
        className={`
          button
          ${variation}
          ${size}
          ${isDisabled ? 'disabled' : ''}
        `}
        disabled={isDisabled}
      >
        {children}
      </button>
    </Link>
  ) : url ? (
    <a
      href={url}
      onClick={onClick}
      className={`
        button
        ${variation || 'primary'}
        ${size || 'medium'}
        ${isDisabled ? 'disabled' : ''}
      `}
    >
      {children}
    </a>
  ) : (
    <button
      className={`
        button
        ${variation}
        ${size}
        ${isDisabled ? 'disabled' : ''}
      `}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
)

export default Button
