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
    {Object.entries(sizes).map(([key], idx) => (
      <Input
        name={`input-${key}`}
        key={idx}
        size={key as Sizes}
        placeholder="Doe is"
        label="Input field with label"
      />
    ))}

    <Input
      name="disabled"
      placeholder="Doe is"
      label="Input field with label"
      isDisabled
    />

    <Input
      name="error"
      placeholder="Doe is"
      label="Input field with label"
      isError
    />
  </div>
)
