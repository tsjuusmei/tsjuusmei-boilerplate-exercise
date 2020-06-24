import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './text-area.scss'

function TextArea({
  id,
  label,
  size,
  placeholder,
  isDisabled,
  isSuccess,
  isError,
  type = 'text',
  isOptional,
  onChange,
  onFocus,
  onBlur,
  ...props
}) {
  return (
    <div className="text-area-wrapper">
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
          {isOptional && <span>Optional</span>}
        </label>
      )}

      <textarea
        className={`
          text-area
          ${size || ''}
          ${isSuccess ? 'success' : ''}
          ${isError ? 'error' : ''}
        `}
        type={type}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        disabled={isDisabled}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        spellCheck="false"
        tabIndex="-1"
        {...props}
      />
    </div>
  )
}

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small']).isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isOptional: PropTypes.bool
}

export default TextArea
