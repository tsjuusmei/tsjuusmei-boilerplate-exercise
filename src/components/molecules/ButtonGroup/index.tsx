import React from 'react'

// Components
import Button, { ButtonProps } from '@/components/atoms/Button'

// Styling
import styles from './button-group.module.scss'

// Types
export enum ButtonGroupDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}

export type GroupProps = {
  data: Array<ButtonProps>,
  direction: ButtonGroupDirection
}

const ButtonGroup: React.FC<GroupProps> = ({
  data,
  direction = 'horizontal',
}) => (
  <div
    className={`
      ${styles['button-group']}
      ${styles[direction]}
    `}
  >
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
