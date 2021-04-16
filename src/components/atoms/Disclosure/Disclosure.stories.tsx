import React from 'react'
import Disclosure, { DisclosureProps } from '.'

export default {
  title: 'Components / Atoms / Disclosure',
  component: Disclosure
}

export const Default = (args: DisclosureProps) => (
  <Disclosure {...args} />
)

Default.args = {
  summary: 'How can I get in touch regarding a feature?',
  body: 'Tortor nulla vitae urna purus volutpat eu. Nisl turpis sit non, ultricies ipsum vitae ut. Hac quam porttitor turpis blandit faucibus. Et sagittis odio eros, lectus ultricies elementum ac.'
}
