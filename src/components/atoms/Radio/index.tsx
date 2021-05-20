import React from 'react'

// Components
import Icon from '@/components/atoms/Icon'

// Styling
import styles from './radio.module.scss'

// Types
export enum RadioSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export type RadioProps = {
  name: string,
  label: string,
  size: RadioSize,
  isDisabled?: boolean,
  defaultChecked?: boolean,
  value?: string,
  hasError?: boolean
}

const Radio: React.FC<RadioProps> = ({
  name,
  label = 'label',
  size = RadioSize.Medium,
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
      <Icon
        name="warning"
        color="var(--error-500)"
      />
    )}
  </label>
)

export default Radio
