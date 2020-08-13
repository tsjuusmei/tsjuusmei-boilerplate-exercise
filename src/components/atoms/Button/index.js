import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

// Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from './button.module.scss'

const Button = ({
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
  const [isHovered, setIsHovered] = useState(false)

  const textLinkIconSize = size === 'sm' ? 8 : size === 'md' ? 12 : 16

  // Check if link is internal or external
  const isInternalLink = href && !href.includes('http')

  // When link is internal, Link > a > div
  const LinkOrButton = href ? 'a' : 'button'

  // Shared classNames (less duplicate code)
  const sharedClassNames = `${styles[size]} ${styles[variation]} ${isDisabled ? styles.disabled : ''}`

  const ButtonWrapper = React.forwardRef((_, ref) => (
    <LinkOrButton
      ref={ref}
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
      <div
        className={`${styles['button-content']} ${sharedClassNames}
        ${contentClassName}`}
        tabIndex={-1}
      >
        {children}
        {
          variation === 'text-link' && (
            <Icon
              name="slice"
              size={textLinkIconSize}
              isHovered={isHovered}
            />
          )
        }
      </div>
    </LinkOrButton>
  ))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <ButtonWrapper />
      </Link>
    )
  }

  return (<ButtonWrapper {...props} />)
}

Button.propTypes = {
  variation: PropTypes.oneOf([
    'primary',
    'primary-alt',
    'secondary',
    'text-link'
  ]),
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  children: PropTypes.any.isRequired,
  label: PropTypes.string,
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
  href: PropTypes.string,
  isDisabled: PropTypes.string,
  className: PropTypes.string,
  contentClassName: PropTypes.string
}

export default Button
