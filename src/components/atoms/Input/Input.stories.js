import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import Input from '.'

const sizes = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

export default {
  title: 'Components / Atoms / Input',
  component: Input,
  decorators: [withA11y]
}

export const Default = () => (
  <div className="input-wrapper">
    {Object.entries(sizes).map(([key, val], idx) => (
      <Input
        key={idx}
        size={key}
        placeholder="Doe is"
        label="Input field with label"
      />
    ))}

    <Input
      placeholder="Doe is"
      label="Input field with label"
      isDisabled
    />

    <Input
      placeholder="Doe is"
      label="Input field with label"
      isError
    />
  </div>
)
