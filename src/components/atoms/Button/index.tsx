import * as React from 'react'
import Link from 'next/link'

// Styles
import styles from './Button.module.scss'

type Props = {
  variation: 'primary' | 'secondary' | 'text-link',
  size: Sizes,
  children?: any,
  label?: string,
  href?: string,
  isDisabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>,
  className?: string,
  contentClassName?: string
}

const Button: React.FC<Props> = ({
  variation = 'primary',
  size = 'md',
  children,
  label = '',
  href = '',
  isDisabled = false,
  className = '',
  contentClassName = '',
  ...props
}) => {
  // Check if link is internal or external
  const isInternalLink = href && !href.includes('http')

  // When link is internal, Link > a > div
  const LinkOrButton = href ? 'a' : 'button'

  // Shared classNames (less duplicate code)
  const sharedClassNames = `${styles[size]} ${styles[variation]} ${isDisabled ? styles.disabled : ''}`

  const ButtonWrapper = React.forwardRef<any, Props>((_, ref) => (
    <LinkOrButton
      {...props}
      ref={ref}
      className={`
        ${styles.button}
        ${className}
        ${sharedClassNames}
      `}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={label}
      href={href}
      {...(!isInternalLink && {
        rel: 'noopener noreferrer',
        target: '_blank'
      })}
      tabIndex={0}
    >
      <div
        className={`${styles['button-content']} ${sharedClassNames}
        ${contentClassName}`}
        tabIndex={-1}
      >
        {children}
      </div>
    </LinkOrButton>
  ))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <ButtonWrapper variation={variation} size={size} />
      </Link>
    )
  }

  return (<ButtonWrapper variation={variation} size={size} {...props} />)
}

export default Button
