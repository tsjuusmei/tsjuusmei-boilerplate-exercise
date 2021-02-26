import * as React from 'react'

// Styles
import styles from './Switch.module.scss'
import Icon from '@/components/atoms/Icon'

export type Props = {
  size: Sizes,
  isDisabled?: boolean,
  isChecked?: boolean,
  isError?: boolean,
  label?: string,
  className?: string
}

const Switch: React.FC<Props> = ({
  size = 'md',
  isDisabled = false,
  isChecked = false,
  isError = false,
  label = '',
  className = '',
  ...props
}) => {
  return (
    <label
      {...props}
      className={`
        ${styles.switch}
        ${isError ? styles.error : ''}
        ${isDisabled ? styles.disabled : ''}
        ${styles[size]}
        ${className}
      `}
      tabIndex={0}
    >
      <input
        type="checkbox"
        defaultChecked={isChecked}
        disabled={isDisabled}
      />
      <span className={styles.slider}/>

      {label && (
        <label className={styles.label}>{label}</label>
      )}

      {isError && (
        <Icon name="error" />
      )}
    </label>
  )
}

export default Switch
