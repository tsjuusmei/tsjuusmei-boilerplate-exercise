import React from 'react'

// Components
import Button, { ButtonProps } from '@/components/atoms/Button'

// Types
export type GroupProps = {
  data: ButtonProps[],
  direction: 'horizontal' | 'vertical'
}

// Styling
import styles from './button-group.module.scss'

const ButtonGroup: React.FC<GroupProps> = ({
  data,
  direction = 'horizontal',
}) => (
  <div
    className={`
      ${styles['button-group']}
      ${styles[direction]}
  `}>
    {data.map((buttonItem: ButtonProps, idx: number) => (
      <Button
        className={`
          ${styles[`button-${idx}`]}
          ${styles.button}
        `}
        key={idx}
        {...buttonItem}
      >
        Button
      </Button>
    ))}
  </div>
)

export default ButtonGroup
