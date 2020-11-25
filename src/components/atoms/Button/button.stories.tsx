import * as React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import {
  withKnobs, text, boolean, select
} from '@storybook/addon-knobs'
import Button from '.'

const variationOptions = ['primary', 'secondary', 'tertiary', 'text-link']
const sizeOptions = ['sm', 'md', 'lg']
const sizeDefault = 'md'

export default {
  title: 'Components / Atoms / Button',
  component: Button,
  decorators: [withA11y, withKnobs]
}

export const Primary = () => (
  <Button
  label="Primary Button"
    variation={select('Variation', variationOptions, 'primary')}
    size={select('Size', sizeOptions, sizeDefault)}
    isDisabled={boolean('Disabled', false)}
    isFullWidth={boolean('Full Width', false)}
  >
    {text('Button Text', 'Primary Button')}
  </Button>
)

export const Secondary = () => (
  <Button
    label="Secondary Button"
    variation={select('Variation', variationOptions, 'secondary')}
    size={select('Size', sizeOptions, sizeDefault)}
    isDisabled={boolean('Disabled', false)}
    isFullWidth={boolean('Full Width', false)}
  >
    {text('Button Text', 'Secondary Button')}
  </Button>
)

export const Tertiary = () => (
  <Button
    label="Tertiary Button"
    variation={select('Variation', variationOptions, 'tertiary')}
    size={select('Size', sizeOptions, sizeDefault)}
    isDisabled={boolean('Disabled', false)}
  >
    {text('Button Text', 'Tertiary Button')}
  </Button>
)

export const TextLink = () => (
  <Button
    label="Text Link"
    variation={select('Variation', variationOptions, 'text-link')}
    size={select('Size', sizeOptions, sizeDefault)}
    isDisabled={boolean('Disabled', false)}
  >
    {text('Button Text', 'Text Link')}
  </Button>
)
