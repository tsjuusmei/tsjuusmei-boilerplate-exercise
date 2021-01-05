import React from 'react'
import Icon from '@/components/atoms/Icon'

// Types
type Props = {
  name: string,
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
  name,
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
      name={name}
      value={value}
      defaultChecked={defaultChecked}
      disabled={isDisabled}
    />
    <div className={styles.radio}>
      <div className={styles.dot} />
    </div>

    {label}
    {hasError && (
      <Icon name="warning" />
    )}
  </label>
)

export default Radio
