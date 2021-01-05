import React from 'react'
import Input from '.'

const sizes = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

export default {
  title: 'Components / Atoms / Input',
  component: Input
}

export const Default = () => (
  <div className="input-wrapper">
    {Object.entries(sizes).map(([key], idx) => (
      <Input
        id={`input-${idx}`}
        name={`input-${key}`}
        key={idx}
        size={key as Sizes}
        placeholder="Doe is"
        label="Input field with label"
      />
    ))}

    <Input
      id="input-3"
      name="disabled"
      placeholder="Doe is"
      label="Input field with label"
      isDisabled
    />

    <Input
      id="input-4"
      name="error"
      placeholder="Doe is"
      label="Input field with label"
      isError
    />

    <Input
      id="input-5"
      size="sm"
      name="error"
      placeholder="Doe is"
      label="Input field with label"
      isError
    />
  </div>
)
