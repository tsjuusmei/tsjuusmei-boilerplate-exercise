import React from 'react'
import TextArea, { TextAreaProps } from '.'

export default {
  title: 'Components / Atoms / TextArea',
  component: TextArea,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    }
  }
}

export const Default = (args: TextAreaProps) => <TextArea {...args} />
