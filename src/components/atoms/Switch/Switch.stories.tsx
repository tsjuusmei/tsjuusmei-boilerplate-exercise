import React from 'react'
import Switch, { Props } from '.'

const sizeOptions = ['sm', 'md', 'lg']

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
  height: 150,
  width: 160,
  marginRight: 40,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

export default {
  title: 'Components / Atoms / Switch',
  component: Switch
}

export const Default = (args: Props) => (
  <div style={{display: 'flex'}}>
    {variants.map((variant, idx) => (
      <div style={style} key={idx}>
        <h5>{variant.title}</h5>
        {sizeOptions.map((size, idx) => (
          <Switch {...variant.options} key={idx} {...args} size={size} />
        ))}
      </div>
    ))}
  </div>
)

Default.args = {
  label: 'Label'
}

export const Error = (args: Props) => (
  <div style={{display: 'flex'}}>
    {variants.map((variant, idx) => (
      <div style={style} key={idx}>
        <h5>{variant.title}</h5>
        {sizeOptions.map((size, idx) => (
          <Switch {...variant.options} key={idx} {...args} size={size} />
        ))}
      </div>
    ))}
  </div>
)

Error.args = {
  isError: true,
  label: 'Label'
}
