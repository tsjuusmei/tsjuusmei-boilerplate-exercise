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
    variation={select('Variation', variationOptions, 'primary')}
    size={select('Size', sizeOptions, sizeDefault)}
    isDisabled={boolean('Disabled', false)}
    label="Primary Button"
  >
    {text('Button Text', 'Primary Button')}
  </Button>
)

export const Secondary = () => (
  <Button
    variation={select('Variation', variationOptions, 'secondary')}
    size={select('Size', sizeOptions, sizeDefault)}
    isDisabled={boolean('Disabled', false)}
    label="Secondary Button"
  >
    {text('Button Text', 'Secondary Button')}
  </Button>
)

export const Tertiary = () => (
  <Button
    variation={select('Variation', variationOptions, 'tertiary')}
    size={select('Size', sizeOptions, sizeDefault)}
    isDisabled={boolean('Disabled', false)}
    label="Tertiary Button"
  >
    {text('Button Text', 'Tertiary Button')}
  </Button>
)

export const TextLink = () => (
  <Button
    variation={select('Variation', variationOptions, 'text-link')}
    size={select('Size', sizeOptions, sizeDefault)}
    isDisabled={boolean('Disabled', false)}
    label="Text Link"
  >
    {text('Button Text', 'Text Link')}
  </Button>
)
