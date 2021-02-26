import React from 'react'
import Input, {Props} from '.'

const sizes = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

export default {
  title: 'Components / Atoms / Input',
  component: Input
}


export const Default = (args: Props) => (
  <div className="input-wrapper">
    {Object.entries(sizes).map(([key], idx) => (
      <Input
        id={`input-${idx}`}
        name={`input-${key}`}
        key={idx}
        size={key as Sizes}
        placeholder="Doe is"
        label="Input field with label"
        {...args}
      />
    ))}
  </div>
)

Default.args = {
  placeholder: 'Doe is',
}

export const Disabled = (args: Props) => (
  <div className="input-wrapper">
    {Object.entries(sizes).map(([key], idx) => (
      <Input
        id={`input-${idx}`}
        name={`input-${key}`}
        key={idx}
        size={key as Sizes}
        placeholder="Doe is"
        label="Input field with label"
        {...args}
        isDisabled
      />
    ))}
  </div>
)

export const Error = (args: Props) => (
  <div className="input-wrapper">
    {Object.entries(sizes).map(([key], idx) => (
      <Input
        id={`input-${idx}`}
        name={`input-${key}`}
        key={idx}
        size={key as Sizes}
        placeholder="Doe is"
        label="Input field with label"
        {...args}
        isError />
    ))}
  </div>
)


Default.args = {
  placeholder: 'Doe is'
}

