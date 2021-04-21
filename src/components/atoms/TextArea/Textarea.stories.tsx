import React from 'react'
import TextArea from '.'

const sizes = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

export default {
  title: 'Components / Atoms / TextArea',
  component: TextArea
}

export const Default = () => (
  <div className="input-wrapper">
    {Object.entries(sizes).map(([key], idx) => (
      <TextArea
        name={`textarea-${key}`}
        key={idx}
        size={key as Sizes}
        placeholder="Doe is"
        label="TextArea field with label"
      />
    ))}

    <TextArea
      name="disabled"
      placeholder="Doe is"
      label="TextArea field with label"
      isDisabled
    />

    <TextArea
      name="error"
      placeholder="Doe is"
      label="Input field with label"
      isError
    />
  </div>
)
