import * as React from 'react'
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
      <Button
        key={idx}
        variation="primary"
        size={key as Sizes}
        label="Primary button"
      >
        Primary {val}
      </Button>
    ))}

    <Button variation="primary" size="md" label="Primary button" isDisabled>
      Primary Disabled
    </Button>
  </div>
)

export const Secondary = () => (
  <div className="buttons-preview">
    {Object.entries(sizes).map(([key, val], idx) => (
      <Button
        key={idx}
        variation="secondary"
        size={key as Sizes}
        label="Secondary button"
      >
        Secondary {val}
      </Button>
    ))}

    <Button variation="secondary" size="md" label="Secondary button" isDisabled>
      Secondary Disabled
    </Button>
  </div>
)

export const Tertiary = () => (
  <div className="buttons-preview">
    {Object.entries(sizes).map(([key, val], idx) => (
      <Button
        key={idx}
        variation="tertiary"
        size={key as Sizes}
        label="tertiary button"
      >
        Tertiary {val}
      </Button>
    ))}

    <Button variation="tertiary" size="md" label="tertiary button" isDisabled>
      Tertiary Disabled
    </Button>
  </div>
)

export const TextLink = () => (
  <div className="buttons-preview">
    {Object.entries(sizes).map(([key], idx) => (
      <Button
        key={idx}
        variation="text-link"
        size={key as Sizes}
        label="Text Link"
      >
        Text Link
      </Button>
    ))}

    <Button variation="text-link" size="md" label="Secondary button" isDisabled>
      Text Link Disabled
    </Button>
  </div>
)
