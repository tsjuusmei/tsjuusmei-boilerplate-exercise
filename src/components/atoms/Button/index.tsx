import * as React from 'react'
import Link from 'next/link'

// Styles
import styles from './Button.module.scss'

// Types
export enum ButtonVariation {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  TextLink = 'text-link'
}

export enum ButtonSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export enum ButtonType {
  Submit = 'submit',
  Button = 'button',
  Reset = 'reset'
}

export type ButtonProps = {
  variation?: ButtonVariation,
  size?: ButtonSize,
  label?: string,
  href?: string,
  isFullWidth?: boolean,
  isDisabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>,
  className?: string,
  contentClassName?: string,
  type?: ButtonType
}

const Button: React.FC<ButtonProps> = ({
  variation = ButtonVariation.Primary,
  size = ButtonSize.Medium,
  type = ButtonType.Button,
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

  // TODO: Need to split off the 'text link' button(s) from the main component.
  // This will also make it easier to change the 'any' type to 'HTMLButtonElement'.
  const ButtonWrapper = React.forwardRef<any, ButtonProps>((_, ref) => (
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
      type={href ? null : type}
      {...(!isInternalLink && {
        rel: 'noopener noreferrer',
        target: '_blank'
      })}
    >
      <div
        className={`
          ${styles['button-content']}
          ${sharedClassNames}
          ${contentClassName}
        `}
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
