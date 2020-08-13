import React from 'react'
import PropTypes from 'prop-types'

// Styles
import styles from './TextArea.module.scss'

function TextArea({
  id,
  label,
  size = 'md',
  placeholder,
  isDisabled,
  isError,
  type = 'text',
  isOptional,
  onChange,
  onFocus,
  onBlur,
  autoComplete = 'on',
  spellCheck = true,
  ...props
}) {
  return (
    <div className={styles['text-area']}>
      {label && (
        <label htmlFor={id} className={styles.label}>
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
          ${styles['text-area-element']}
          ${styles[size]}
          ${isError ? styles.error : null}
        `}
        onChange={onChange}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={isDisabled}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        tabIndex="-1"
        {...props}
      />
    </div>
  )
}

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isError: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  spellCheck: PropTypes.bool,
  autoComplete: PropTypes.string,
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isOptional: PropTypes.bool
}

export default TextArea
