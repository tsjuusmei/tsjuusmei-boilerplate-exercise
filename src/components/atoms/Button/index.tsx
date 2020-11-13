import React, { useState } from 'react'
import Link from 'next/link'

// Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from './button.module.scss'

type Props = {
  variation: 'primary' | 'secondary' | 'tertiary',
  size: 's' | 'm' | 'l',
  isDisabled?: boolean,
  children?: any,
  onClick?: React.MouseEventHandler<HTMLElement>,
  url?: string,
  to?: string
}

const Button: React.FC<Props> = ({
  variation = 'primary',
  size = 'md',
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
        ${styles.button}
        ${sharedClassNames}
        ${className}
      `}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={label}
      href={(!isDisabled && href) && href}
      {...(!isInternalLink && {
        rel: 'noopener noreferrer',
        target: '_blank'
      })}
      tabIndex={0}
      onMouseOver={() => !isDisabled && setIsHovered(true)}
      onMouseLeave={() => !isDisabled && setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  )
)

export default Button
