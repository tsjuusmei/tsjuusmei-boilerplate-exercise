import React from 'react'

import Test from '.'

export default {
  title: 'Components / Atoms / Test',
  component: Test
}

export const Default = (args) => <Test {...args} />
Default.args = {}
