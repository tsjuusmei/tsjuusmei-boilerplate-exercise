import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import Button from '.'

const sizes = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

export default {
  title: 'Components / Atoms / Button',
  component: Button,
  decorators: [withA11y]
}

export const Primary = () => (
  <div className="buttons-preview">
    {Object.entries(sizes).map(([key, val], idx) => (
      <Button key={idx} variation="primary" size={key} label="Primary button">
        Primary {val}
      </Button>
    ))}

    <Button variation="primary" size="md" label="Primary button" isDisabled>
      Disabled
    </Button>
  </div>
)

export const PrimaryAlt = () => (
  <div className="buttons-preview">
    {Object.entries(sizes).map(([key, val], idx) => (
      <Button key={idx} variation="primary-alt" size={key} label="Primary alt button">
        Primary alt {val}
      </Button>
    ))}

    <Button variation="primary-alt" size="md" label="Primary alt button" isDisabled>
      Disabled
    </Button>
  </div>
)

export const Secondary = () => (
  <div className="buttons-preview">
    {Object.entries(sizes).map(([key, val], idx) => (
      <Button key={idx} variation="secondary" size={key} label="Secondary button">
        Secondary {val}
      </Button>
    ))}

    <Button variation="secondary" size="md" label="Secondary button" isDisabled>
      Disabled
    </Button>
  </div>
)

export const TextLink = () => (
  <div className="buttons-preview">
    {Object.entries(sizes).map(([key, val], idx) => (
      <Button key={idx} variation="text-link" size={key} label="Secondary button">
        More information
      </Button>
    ))}

    <Button variation="text-link" size="md" label="Secondary button" isDisabled>
      Disabled
    </Button>
  </div>
)
