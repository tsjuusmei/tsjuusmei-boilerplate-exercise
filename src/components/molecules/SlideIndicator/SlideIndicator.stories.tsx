import React from 'react'

import SlideIndicator from '.'
import type { Props } from '.'

export default {
  title: 'Components / Molecules / SlideIndicator',
  component: SlideIndicator
}

export const Default = (args: Props) => <SlideIndicator {...args} />
Default.args = {
  active: 0,
  total: 8,
}
