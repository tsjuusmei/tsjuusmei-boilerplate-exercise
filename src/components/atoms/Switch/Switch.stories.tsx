import React from 'react'
import Switch from '.'


export default {
  title: 'Components / Atoms / Switch',
  component: Switch
}

const style = {
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '40px'
}

const variants = [
  {
    title: 'default',
    options: {}
  },
  {
    title: 'checked',
    options: {
      checked: true,
    }
  },
  {
    title: 'disabled',
    options: {
      disabled: true,
    }
  },
  {
    title: 'disabled + checked',
    options: {
      disabled: true,
      checked: true
    }
  }
]

export const Overview = () => (
  <div style={{display: 'flex'}}>
    {variants.map((variant, idx) => (
      <div style={style} key={idx}>
        <h5>{variant.title}</h5>
        <Switch {...variant.options} size="large" />
        <Switch {...variant.options} />
        <Switch {...variant.options} size="small" />
      </div>
    ) )}
  </div>
)
