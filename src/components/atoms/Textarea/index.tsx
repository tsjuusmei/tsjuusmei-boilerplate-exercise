import * as React from 'react'

// Styles
import styles from  './TextArea.module.scss'

type Props = {
  id?: string,
  label?: string,
  isError?: boolean,
  size?: Sizes,
  placeholder?: string,
  spellCheck?: boolean,
  autoComplete?: string,
  isDisabled?: boolean,
  name: string,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void,
  onBlur?: (e: React.FormEvent<HTMLTextAreaElement>) => void,
  isOptional?: boolean
}

const Textarea: React.FC<Props> = ({
  id,
  label,
  size = 'md',
  placeholder,
  isDisabled,
  isError,
  isOptional,
  onChange,
  onFocus,
  onBlur,
  autoComplete = 'on',
  spellCheck = true
}) => {
  return (
    <div className={styles.textarea}>
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
          ${styles.element}
          ${styles[size]}
          ${isError ? styles.error : null}
        `}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        disabled={isDisabled}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
      />
    </div>
  )
}

export default Textarea
