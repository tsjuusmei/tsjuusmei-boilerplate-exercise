import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

// Styles
import './button.scss'

function Button(props) {
  const {
    variation = 'primary',
    target = '_blank',
    size = 'm',
    isDisabled,
    isScroll,
    children,
    onClick,
    href,
    to
  } = props

  const classNames = `
    button
    ${variation}
    ${size}
    ${isDisabled ? 'disabled' : ''}
  `

  if (href) {
    return (
      <a
        {...props}
        href={href}
        rel="noopener noreferrer"
        target={target}
        className={classNames}
      >
        <span className="button-content" tabIndex="-1">
          {children}
        </span>
      </a>
    )
  } if (to) {
    return (
      <Link
        href={to}
        scroll={isScroll}
        passHref
      >
        <a
          className={classNames}
        >
          <span className="button-content" tabIndex="-1">
            {children}
          </span>
        </a>
      </Link>
    )
  }
  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span className="button-content" tabIndex="-1">
        {children}
      </span>
    </button>
  )
}

Button.propTypes = {
  variation: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary'
  ]),
  size: PropTypes.oneOf([
    'm',
    'l',
    'xl'
  ]),
  isDisabled: PropTypes.bool,
  isScroll: PropTypes.bool,
  target: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  href: PropTypes.string,
  url: PropTypes.string,
  to: PropTypes.string
}

export default Button
