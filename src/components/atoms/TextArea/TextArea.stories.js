import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import TextArea from '.'

const sizes = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

export default {
  title: 'Components / Atoms / TextArea',
  component: TextArea,
  decorators: [withA11y]
}

export const Default = () => (
  <div className="input-wrapper">
    {Object.entries(sizes).map(([key, val], idx) => (
      <TextArea
        key={idx}
        size={key}
        placeholder="Doe is"
        label="TextArea field with label"
      />
    ))}

    <TextArea
      placeholder="Doe is"
      label="TextArea field with label"
      isDisabled
    />

    <TextArea
      placeholder="Doe is"
      label="Input field with label"
      isError
    />
  </div>
)
