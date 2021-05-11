import React from 'react'
import Radio, { RadioProps, RadioSize } from '.'

export default {
  title: 'Components / Atoms / Radio',
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: RadioSize
      }
    }
  }
}

export const Default = (args: RadioProps) => <Radio {...args} />
Default.args = {
  size: RadioSize.Medium
}
