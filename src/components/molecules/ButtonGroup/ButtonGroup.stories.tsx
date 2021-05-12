import React from 'react'

// Components
import ButtonGroup, { GroupProps } from '.'
import { ButtonSize, ButtonVariation } from '@/components/atoms/Button'

export default {
  title: 'Components / Molecules / ButtonGroup',
  component: ButtonGroup
}

export const Default = (args: GroupProps) => <ButtonGroup {...args} />

Default.args = {
  data: [
    {
      variation: ButtonVariation.Primary,
      size: ButtonSize.Medium
    },
    {
      variation: ButtonVariation.Secondary,
      size: ButtonSize.Medium
    }
  ]
}
