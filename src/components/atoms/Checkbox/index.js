import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

// Styling
import './checkbox.css'

const Checkbox = ({
  variation = 'primary',
  size = 'sm',
  isDisabled = false,
  className = '',
  onClick,
  isChecked,
  ...props
}) => {
  const elementStyling = clsx({
    className,
    ['is-disabled']: isDisabled
  })

  const childStyling = clsx({
    ['is-checked']: isChecked,
  })

  console.log('childStyling =>>', childStyling)

  return (
    <label className={`Checkbox ${size} ${elementStyling}`}>
      <input className="input" type="checkbox" disabled={isDisabled} />
      <span className={`checkmark ${childStyling}`} />
    </label>
  )
}

Checkbox.propTypes = {
  variation: PropTypes.oneOf([
    'primary',
  ]),
  size: PropTypes.oneOf([
    'sm',
    'md'
  ]),
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isChecked: PropTypes.bool
}

export default Checkbox
