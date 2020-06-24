import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Styles
import './select.scss'

function Select({
  id,
  label,
  variation = 'default',
  placeholder,
  isDisabled,
  isSuccess,
  isError,
  type = 'text',
  onChange,
  onFocus,
  children,
  ...props
}) {
  const [isFilled, setIsFilled] = useState(false)

  function handleChange(e) {
    setIsFilled(true)

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className="select-wrapper">
      {label && (
        <label htmlFor={id} className="label">
          {label}
          {isError && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7.5" fill="black" stroke="black" />
              <path d="M7 3H9L8.8 10H7.2L7 3Z" fill="white" />
              <circle cx="8" cy="12" r="1" fill="white" />
            </svg>

          )}
        </label>
      )}

      <select
        className={`
          select
          ${isSuccess ? 'success' : ''}
          ${isError ? 'error' : ''}
          ${variation}
          ${isFilled ? 'filled' : ''}
        `}
        onChange={(e) => {
          handleChange(e)
        }}
        placeholder={placeholder}
        type={type}
        id={id}
        disabled={isDisabled}
        onFocus={onFocus}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool,
  variation: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  children: PropTypes.any
}

export default Select
