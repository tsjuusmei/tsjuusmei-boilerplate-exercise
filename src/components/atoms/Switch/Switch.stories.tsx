import React from 'react'
import Switch, { Props } from '.'

const sizeOptions = ['lg', 'md', 'sm']

const variants = [
  {
    title: 'default',
    options: {}
  },
  {
    title: 'checked',
    options: {
      isChecked: true,
    }
  },
  {
    title: 'disabled',
    options: {
      isDisabled: true,
    }
  },
  {
    title: 'disabled + checked',
    options: {
      isDisabled: true,
      isChecked: true
    }
  }
]

const style = {
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '40px'
}

export default {
  title: 'Components / Atoms / Switch',
  component: Switch
}

export const Default = () => (
  <div style={{display: 'flex'}}>
    {variants.map((variant, idx) => (
      <div style={style} key={idx}>
        <h5>{variant.title}</h5>
        {sizeOptions.map((size, idx) => (
          <Switch {...variant.options} key={idx} size={size} />
        ))}
      </div>
    ) )}
  </div>
)

export const Error = (args: Props) => (
  <div style={{display: 'flex'}}>
    {variants.map((variant, idx) => (
      <div style={style} key={idx}>
        <h5>{variant.title}</h5>
        {sizeOptions.map((size, idx) => (
          <Switch {...variant.options} key={idx} {...args} size={size} />
        ))}
      </div>
    ) )}
  </div>
)

Error.args = {
  isError: true
}

export const Label = (args: Props) => (
  <div style={{display: 'flex'}}>
    {variants.map((variant, idx) => (
      <div style={style} key={idx}>
        <h5>{variant.title}</h5>
        {sizeOptions.map((size, idx) => (
          <Switch {...variant.options} key={idx} {...args} size={size} />
        ))}
      </div>
    ) )}
  </div>
)

Label.args = {
  label: 'label'
}