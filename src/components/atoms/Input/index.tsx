import * as React from 'react'
import { RegisterOptions, useFormContext } from 'react-hook-form'

// Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from './Input.module.scss'

// Utils
import { convertSizeToNumber } from '@/utils/convertSizeToNumber'

// Types
export enum InputSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export type InputProps = {
  id?: string,
  label?: string,
  hasError?: boolean,
  size: InputSize,
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
  rules?: RegisterOptions
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  size = InputSize.Medium,
  placeholder,
  isDisabled,
  hasError,
  type = 'text',
  isOptional,
  onChange,
  onFocus,
  onBlur,
  autoComplete = 'on',
  spellCheck = true,
  rules,
  ...props
}) => {
  const convertedSize = convertSizeToNumber(size)
  const methods = useFormContext()

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
        className={`
          ${styles['input-element']}
          ${styles[size]}
          ${hasError ? styles.error : ''}
        `}
        name={name}
        onChange={onChange}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={isDisabled}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete={autoComplete}
        spellCheck={spellCheck}
        aria-labelledby={label}
        ref={methods?.register({...rules})}
        {...props}
      />

      {hasError && (
        <Icon
          size={convertedSize}
          name="warning"
          color="var(--error-500)"
        />
      )}
    </div>
  )
}

export default Input
