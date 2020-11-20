import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import Checkbox from '.'

const sizes = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

export default {
  title: 'Components / Atoms / Checkbox',
  component: Checkbox,
  decorators: [withA11y]
}

export const Primary = () => (
  <div className="component-preview">
    {Object.entries(sizes).map(([key], idx) => (
      <Checkbox key={idx} variation="primary" size={key} />
    ))}

    {Object.entries(sizes).map(([key], idx) => (
      <Checkbox key={idx} variation="primary" size={key} isDisabled={true} />
    ))}
  </div>
)
