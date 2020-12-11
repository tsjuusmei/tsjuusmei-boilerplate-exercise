import * as React from 'react'

// Styles
import styles from './Switch.module.scss'

type Props = {
  props?: any,
  size?: string
  disabled?: boolean,
  checked?: boolean
}

const Switch: React.FC<Props> = ({
  size = 'medium',
  disabled = false,
  checked = false,
  props
}) => {
  return (
    <label
      className={`
      ${styles.switch}
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
    </label>
  )
}

export default Switch
