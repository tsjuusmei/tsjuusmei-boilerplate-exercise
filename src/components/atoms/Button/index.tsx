import * as React from 'react'

// Styles
import styles from './Button.module.scss'

// Types
export enum ButtonVariation {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary'
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
  isFullWidth = false,
  isDisabled = false,
  className = '',
  contentClassName = '',
  ...props
}) => {
  // Shared classNames (less duplicate code)
  const sharedClassNames = `${styles[size]} ${styles[variation]} ${isFullWidth ? styles.fullwidth : ''} ${isDisabled ? styles.disabled : ''}`

  return (
    <button
      {...props}
      className={`
        ${styles.button}
        ${className}
        ${sharedClassNames}
      `}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={label}
      type={type}
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
    </button>
  )
}

export default Button
