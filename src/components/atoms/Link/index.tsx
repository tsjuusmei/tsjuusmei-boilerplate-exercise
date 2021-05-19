import React from 'react'
import Link from 'next/link'

import styles from './Link.module.scss'

export enum TextLinkVariation {
  Internal = 'internal',
  External = 'external'
}

export enum TextLinkSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export type TextLinkProps = {
  href: string
  variation?: TextLinkVariation,
  className?: string,
  size?: TextLinkSize,
  isDisabled?: boolean

}

const TextLink: React.FC<TextLinkProps> = ({
  href = '',
  children,
  variation = TextLinkVariation.Internal,
  className = '',
  size =  TextLinkSize.Medium,
  isDisabled = false,
  ...props
}) => {
  const sharedClassNames = `textlink-${size} ${isDisabled? styles.disabled: ''} ${styles['text-link']}`
  if(variation === 'internal') {
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
  } else if (variation === 'external') {
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
}

export default TextLink
