import React from 'react'

// Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from './Checkbox.module.scss'

// Types
export enum CheckboxSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export type CheckboxProps = {
  size: CheckboxSize,
  label?: string,
  isDisabled?: boolean,
  isChecked?: boolean,
  isDefaultChecked?: boolean,
  hasError?: boolean,
  className?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Checkbox: React.FC<CheckboxProps> = ({
  size = CheckboxSize.Small,
  label = '',
  isDisabled = false,
  hasError = false,
  isChecked,
  isDefaultChecked = false,
  onChange,
  className = ''
}) => {
  return (
    <label
      className={`
        ${styles.checkbox}
        ${styles[size]}
        ${hasError ? styles['has-error'] : ''}
        ${isDisabled ? styles['is-disabled'] : ''}
        ${className}
      `}
    >
      <input
        type="checkbox"
        disabled={isDisabled}
        defaultChecked={isDefaultChecked}
        checked={isChecked}
        onChange={onChange}
      />
      <span className={styles.checkmark}>
        <Icon className={styles['icon-checkmark']} name="checkmark" />
      </span>
      {label && (
        label
      )}
      {hasError && (
        <Icon className={styles['icon-warning']} name="warning" />
      )}
    </label>
  )
}

export default Checkbox
