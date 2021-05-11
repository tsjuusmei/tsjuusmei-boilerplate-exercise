import * as React from 'react'

//Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from  './TextArea.module.scss'

// Types
export enum TextAreaSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export type TextAreaProps = {
  id?: string,
  label?: string,
  isError?: boolean,
  size: TextAreaSize,
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

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  size = TextAreaSize.Medium,
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
            <Icon name="warning" color="var(--error-500)"/>
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

export default TextArea
