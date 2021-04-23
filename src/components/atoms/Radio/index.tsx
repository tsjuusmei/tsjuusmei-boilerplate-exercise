import React from 'react'

//Components
import Icon from '@/components/atoms/Icon'

// Styling
import styles from './radio.module.scss'

// Types
export type RadioProps = {
  name: string,
  label: string,
  size?: Sizes,
  isDisabled?: boolean,
  defaultChecked?: boolean,
  value?: string,
  hasError?: boolean
}

export enum RadioSizes {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

const Radio: React.FC<RadioProps> = ({
  name,
  label = 'label',
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
      <Icon
        name="warning"
        color="var(--error-500)"
      />
    )}
  </label>
)

export default Radio
