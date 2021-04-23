import React from 'react'

// Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from './Checkbox.module.scss'

export type CheckboxProps = {
  size: Sizes,
  label?: string,
  isDisabled?: boolean,
  isChecked?: boolean,
  isDefaultChecked?: boolean,
  hasError?: boolean,
  className?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export enum CheckBoxSizes {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

const Checkbox: React.FC<CheckboxProps> = ({
  size = 'md',
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
