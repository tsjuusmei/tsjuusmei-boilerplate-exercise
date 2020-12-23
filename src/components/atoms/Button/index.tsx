import * as React from 'react'
import Link from 'next/link'

// Styles
import styles from './Button.module.scss'

type Props = {
  variation: 'primary' | 'secondary' | 'tertiary' | 'text-link',
  size: Sizes,
  label?: string,
  href?: string,
  isFullWidth?: boolean,
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
  isFullWidth = false,
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
  const sharedClassNames = `${styles[size]} ${styles[variation]} ${isFullWidth ? styles.fullwidth : ''} ${isDisabled ? styles.disabled : ''}`

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
    >
      <div
        className={`${styles['button-content']} ${sharedClassNames}
        ${contentClassName}`}
      >
        {children}
      </div>
    </LinkOrButton>
  ))

  ButtonWrapper.displayName = 'ButtonWrapper'

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
