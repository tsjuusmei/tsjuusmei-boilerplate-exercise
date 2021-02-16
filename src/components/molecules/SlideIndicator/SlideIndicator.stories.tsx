import React from 'react'

import SlideIndicator from '.'
import type { Props } from '.'

export default {
  title: 'Components / Molecules / SlideIndicator',
  component: SlideIndicator
}

function handleSelect(index: number) {
  console.log({ index })
}

export const Default = (args: Props) => <SlideIndicator {...args} />
Default.args = {
  active: 0,
  total: 8,
  onSelect: handleSelect
}
