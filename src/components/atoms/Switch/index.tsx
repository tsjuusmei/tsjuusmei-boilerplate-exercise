import * as React from 'react'

//Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from './Switch.module.scss'

export type SwitchProps = {
  size: Sizes,
  isDisabled?: boolean,
  isChecked?: boolean,
  isDefaultChecked?: boolean,
  hasError?: boolean,
  label?: string,
  className?: string
}

const Switch: React.FC<SwitchProps> = ({
  size = 'md',
  isDisabled = false,
  isChecked = false,
  isDefaultChecked = false,
  hasError = false,
  label = '',
  className = '',
  ...props
}) => {
  return (
    <label
      {...props}
      className={`
        ${styles.switch}
        ${hasError ? styles.error : ''}
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
          {hasError && (
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
