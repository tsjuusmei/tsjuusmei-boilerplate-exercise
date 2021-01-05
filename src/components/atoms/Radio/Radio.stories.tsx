import React from 'react'

import Radio from '.'

export default {
  title: 'Components / Atoms / Radio',
  component: Radio
}

const RadioGroup = (args) => (
  <div>
    {
      [...Array(4)].map((e, idx) => (
        <Radio
          key={idx}
          value={idx}
          {...args}
          defaultChecked={idx === 0}
        />
      ))
    }
  </div>
)

export const Small = (args) => (
  <RadioGroup {...args} />
)

Small.args = {
  size: 'sm',
  label: 'Label small',
  name: 'small-default'
}

export const Medium = (args) => (
  <RadioGroup {...args} />
)

Medium.args = {
  size: 'md',
  label: 'Label medium',
  name: 'medium-default'
}

export const Large = (args) => (
  <RadioGroup {...args} />
)

Large.args = {
  size: 'lg',
  label: 'Label large',
  name: 'large-default'
}

export const SmallDisabled = (args) => (
  <RadioGroup {...args} />
)

SmallDisabled.args = {
  size: 'sm',
  label: 'Label small',
  name: 'small-default',
  isDisabled: true
}

export const MediumDisabled = (args) => (
  <RadioGroup {...args} />
)

MediumDisabled.args = {
  size: 'md',
  label: 'Label medium',
  name: 'medium-default',
  isDisabled: true
}

export const LargeDisabled = (args) => (
  <RadioGroup {...args} />
)

LargeDisabled.args = {
  size: 'lg',
  label: 'Label large',
  name: 'large-default',
  isDisabled: true
}


export const SmallError = (args) => (
  <RadioGroup {...args} />
)

SmallError.args = {
  size: 'sm',
  label: 'Label small error',
  name: 'small-error',
  hasError: true
}

export const MediumError = (args) => (
  <RadioGroup {...args} />
)

MediumError.args = {
  size: 'md',
  label: 'Label medium error',
  name: 'medium-error',
  hasError: true
}

export const LargeError = (args) => (
  <RadioGroup {...args} />
)

LargeError.args = {
  size: 'lg',
  label: 'Label large error',
  name: 'large-error',
  hasError: true
}

export const SmallErrorDisabled = (args) => (
  <RadioGroup {...args} />
)

SmallErrorDisabled.args = {
  size: 'sm',
  label: 'Label small error',
  name: 'small-error',
  hasError: true,
  isDisabled: true
}

export const MediumErrorDisabled = (args) => (
  <RadioGroup {...args} />
)

MediumErrorDisabled.args = {
  size: 'md',
  label: 'Label medium error',
  name: 'medium-error',
  hasError: true,
  isDisabled: true
}

export const LargeErrorDisabled = (args) => (
  <RadioGroup {...args} />
)

LargeErrorDisabled.args = {
  size: 'lg',
  label: 'Label large error',
  name: 'large-error',
  hasError: true,
  isDisabled: true
}
