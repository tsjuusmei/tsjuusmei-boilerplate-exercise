import React from 'react'
import Radio, { RadioProps, RadioSize } from '.'

const sizeOptions = Object.keys(RadioSize).map(key => RadioSize[key])
const sizeDefault = RadioSize.Medium

export default {
  title: 'Components / Atoms / Radio',
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizeOptions
      }
    }
  }
}

export const Default = (args: RadioProps) => <Radio {...args} />

Default.args = {
  size: sizeDefault
}
