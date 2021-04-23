import React from 'react'
import Radio, { RadioProps, RadioSizes } from '.'

export default {
  title: 'Components / Atoms / Radio',
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: RadioSizes
      }
    }
  }
}

export const Default = (args: RadioProps) => <Radio {...args} />
