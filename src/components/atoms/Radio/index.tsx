import React from 'react'

// Types
type Props = {
  group: string,
  label: string,
  size?: Sizes,
  isDisabled?: boolean,
  defaultChecked?: boolean,
  value?: string,
  hasError?: boolean
}

// Styling
import styles from './radio.module.scss'

const Radio: React.FC<Props> = ({
  group,
  label,
  size = 'md',
  isDisabled,
  hasError,
  defaultChecked,
  value
}) => (
  <label
    className={`
      ${styles.wrapper}
      ${styles[size]}
      ${hasError ? styles['has-error'] : ''}
    `}
  >
    <input
      type="radio"
      name={group}
      value={value}
      defaultChecked={defaultChecked}
      disabled={isDisabled}
    />
    <div className={styles.radio}>
      <div className={styles.dot} />
    </div>

    {label}
  </label>
)

export default Radio
