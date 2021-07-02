import React from 'react'
import SlideIndicator, { SlideIndicatorProps } from '.'

export default {
  title: 'Components / Molecules / SlideIndicator',
  component: SlideIndicator
}

export const Default = (args: SlideIndicatorProps) => <SlideIndicator {...args} />
Default.args = {
  active: 0,
  total: 8,
}
