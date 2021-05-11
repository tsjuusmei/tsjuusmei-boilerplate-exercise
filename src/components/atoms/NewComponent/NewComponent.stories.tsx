import React from 'react'

import NewComponent from '.'

export default {
  title: 'Components / Atoms / NewComponent',
  component: NewComponent
}

export const Default = (args) => <NewComponent {...args} />
Default.args = {}
