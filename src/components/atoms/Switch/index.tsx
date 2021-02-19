import * as React from 'react'

// Styles
import styles from './Switch.module.scss'
import Icon from '@/components/atoms/Icon'

type Props = {
  size?: string
  disabled?: boolean,
  checked?: boolean,
  error?: boolean,
  label?: string
}

const Switch: React.FC<Props> = ({
  size = 'medium',
  disabled = false,
  checked = false,
  error,
  label
}) => {
  return (
    <label
      className={`
      ${styles.switch}
      ${error ? styles.error : ''}
      ${disabled ? styles.disabled : ''}
      ${styles[size]}`}
      tabIndex={0}
    >
      <input
        type="checkbox"
        checked={checked ? checked : undefined}
        disabled={disabled}
      />
      <span className={styles.slider}/>

      {label && (
        <span className={styles.label}>{label}</span>
      )}

      {error && (
        <Icon name="error" />
      )}
    </label>
  )
}

export default Switch
