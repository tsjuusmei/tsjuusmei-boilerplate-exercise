import React from 'react'
import TextArea, { TextAreaProps, TextAreaSize } from '.'

export default {
  title: 'Components / Atoms / TextArea',
  component: TextArea,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: TextAreaSize
      }
    }
  }
}

export const Default = (args: TextAreaProps) => <TextArea {...args} />
Default.args = {
  size: TextAreaSize.Medium
}
