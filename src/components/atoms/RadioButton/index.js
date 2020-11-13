import React from 'react'
import PropTypes from 'prop-types'

const RadioButton = ({
  value,
  className,
  isChecked = false,
  size = 'md',
  isDisabled,
  isError,
  ...props
}) => {
  return (
    <label
      for={value}
      className={`
        ${className}
        is-${size}
        ${isDisabled ? 'is-disabled' : null}
      `}
    >
      {value && (
        <p>{value}</p>
      )}
      <input
        type="radio"
        checked={isChecked}
        value={value}
        className={`${isError ? 'is-error' : null}`}
        {...props}
      />
    </label>
  )
}

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  isChecked: PropTypes.bool,
  size: PropTypes.oneOf([
    'Large',
    'Medium',
    'Large'
  ]),
  isDisabled: PropTypes.bool,
  isError: PropTypes.bool
}

export default RadioButton
