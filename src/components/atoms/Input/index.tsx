import * as React from 'react'

// Components
import Icon from '@/components/atoms/Icon'

// Utils
import { convertSizeToNumber } from '@/utils/convertSizeToNumber'

// Styles
import styles from  './Input.module.scss'

export type InputProps = {
  id?: string,
  label?: string,
  isError?: boolean,
  size?: Sizes,
  type?: string,
  placeholder?: string,
  spellCheck?: boolean,
  autoComplete?: string,
  isDisabled?: boolean,
  name: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void,
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void,
  isOptional?: boolean,
  forwardRef?: any
}

const Input = React.forwardRef<any, InputProps>(({
  id,
  label,
  size = 'md',
  placeholder,
  isDisabled,
  isError,
  type = 'text',
  isOptional,
  name,
  onChange,
  onFocus,
  onBlur,
  autoComplete = 'on',
  spellCheck = true,
  ...props
}, ref) => {
  const convertedSize = convertSizeToNumber(size)

  return (
    <div className={`
      ${styles.input}
      ${styles[size]}
    `}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {isOptional && <span>Optional</span>}
        </label>
      )}

      <input
        ref={ref}
        className={`
          ${styles['input-element']}
          ${styles[size]}
          ${isError ? styles.error : null}
        `}
        onChange={onChange}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={isDisabled}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        aria-labelledby={label}
        {...props}
      />

      {isError && (
        <Icon
          size={convertedSize}
          name="warning"
          color="var(--error-500)" />
      )}
    </div>
  )
})

export default Input
