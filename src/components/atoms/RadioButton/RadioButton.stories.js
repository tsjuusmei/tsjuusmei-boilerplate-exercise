import React from 'react'
import RadioButton from '.'

const sizes = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

const radioButtons = [
  {
    value: 'Radio button',
    isChecked: true,
  }
]

export default {
  title: 'Components / Atoms / RadioButton',
  component: Input
}

export const Default = () => (
  <div className="input-wrapper">
    {radioButtons.map(({ value, isChecked }, idx) => (
      <RadioButton
        key={idx}
        size={sizes.md}
        value={value}
        isChecked={isChecked}
      />
    ))}
  </div>
)
