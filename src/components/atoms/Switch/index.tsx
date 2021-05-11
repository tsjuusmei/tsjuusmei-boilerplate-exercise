import * as React from 'react'

// Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from './Switch.module.scss'

// Types
export enum SwitchSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export type SwitchProps = {
  size: SwitchSize,
  isDisabled?: boolean,
  isChecked?: boolean,
  isDefaultChecked?: boolean,
  isError?: boolean,
  label?: string,
  className?: string
}

const Switch: React.FC<SwitchProps> = ({
  size = SwitchSize.Medium,
  isDisabled = false,
  isChecked = false,
  isDefaultChecked = false,
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
        defaultChecked={isDefaultChecked}
        checked={isChecked}
        disabled={isDisabled}
      />
      <span className={styles.slider}/>

      {label && (
        <label
          className={`
            ${styles.label}
            ${styles[size]}
          `}>
          {label}
          {isError && (
            <Icon
              name="warning"
              color="var(--error-500)"
            />
          )}
        </label>
      )}
    </label>
  )
}

export default Switch
