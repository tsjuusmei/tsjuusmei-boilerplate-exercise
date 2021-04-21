import React from 'react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Components / Atoms / Radio',
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    }
  }
}

export const Default = (args: RadioProps) => <Radio {...args} />
