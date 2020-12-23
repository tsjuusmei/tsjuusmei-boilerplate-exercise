import React from 'react'

// Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from './Checkbox.module.scss'

type Props = {
  size: Sizes,
  label?: string,
  isDisabled?: boolean,
  isChecked?: boolean,
  hasError?: boolean,
  className?: string
}

const Checkbox: React.FC<Props> = ({
  size = 'md',
  label = '',
  isDisabled = false,
  hasError = false,
  className = '',
  isChecked
}) => {
  return (
    <label
      className={`
        ${styles.checkbox}
        ${styles[size]}
        ${hasError ? styles['has-error'] : ''}
        ${className}
      `}
    >
      <input type="checkbox" disabled={isDisabled} defaultChecked={isChecked} />
      <span className={styles.checkmark}>
        <Icon name="check" />
      </span>
      {label && (
        label
      )}
    </label>
  )
}

export default Checkbox
