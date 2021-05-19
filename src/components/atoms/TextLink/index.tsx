import React from 'react'
import Link from 'next/link'

import styles from './Link.module.scss'

export enum TextLinkSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export type TextLinkProps = {
  href: string
  className?: string,
  size?: TextLinkSize,
  isDisabled?: boolean

}

const TextLink: React.FC<TextLinkProps> = ({
  href = '',
  children,
  className = '',
  size =  TextLinkSize.Medium,
  isDisabled = false,
  ...props
}) => {
  const sharedClassNames = `textlink-${size} ${isDisabled? styles.disabled: ''} ${styles['text-link']}`
  if (href.includes('http')) {
    return (
      <a
        href={href}
        className={`
        ${className}
        ${sharedClassNames}
      `}
        {...props}
      >
        {children}
      </a>
    )
  }
  return (
    <Link
      href={href}
      {...props}
    >
      <a className={`
        ${className}
        ${sharedClassNames}
      `}>
        {children}
      </a>
    </Link>
  )
}

export default TextLink
