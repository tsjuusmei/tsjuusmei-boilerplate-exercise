import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import Textarea from '.'

const sizes = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

export default {
  title: 'Components / Atoms / TextArea',
  component: Textarea,
  decorators: [withA11y]
}

export const Default = () => (
  <div className="input-wrapper">
    {Object.entries(sizes).map(([key], idx) => (
      <Textarea
        name={`textarea-${key}`}
        key={idx}
        size={key as Sizes}
        placeholder="Doe is"
        label="Textarea field with label"
      />
    ))}

    <Textarea
      name="disabled"
      placeholder="Doe is"
      label="Textarea field with label"
      isDisabled
    />

    <Textarea
      name="error"
      placeholder="Doe is"
      label="Input field with label"
      isError
    />
  </div>
)
