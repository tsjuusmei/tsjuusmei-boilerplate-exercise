import React from 'react'
import ButtonGroup, { GroupProps } from '.'

export default {
  title: 'Components / Molecules / ButtonGroup',
  component: ButtonGroup
}

export const Default = (args: GroupProps) => <ButtonGroup {...args} />
Default.args = {
  data: [
    {
      variation: 'primary',
      size: 'sm'
    },
    {
      variation: 'secondary',
      size: 'sm'
    }
  ]
}
