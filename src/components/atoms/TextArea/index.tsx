import * as React from 'react'

//Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from  './TextArea.module.scss'

type Props = {
  id?: string,
  label?: string,
  hasError?: boolean,
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

const TextArea: React.FC<Props> = ({
  id,
  label,
  size = 'md',
  placeholder,
  isDisabled,
  hasError,
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
          {hasError && (
            <Icon name="warning" color="var(--error-500)"/>
          )}
          {isOptional && <span>Optional</span>}
        </label>
      )}

      <textarea
        className={`
          ${styles.element}
          ${styles[size]}
          ${hasError ? styles.error : null}
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
