import React from 'react'
import { withA11y } from '@storybook/addon-a11y'

const headings = ['1', '2', '3', '4', '5', '6']

export default {
  title: 'Elements / Typography',
  decorators: [withA11y]
}

export const Headings = () => (
  <>
    <div>
      { headings.map((heading, idx) => {
        const CustomTag = `h${heading}`

        return (
          <div key={idx}>
            <CustomTag>{`Heading ${heading}`}</CustomTag>
          </div>
        )
      })}
    </div>
  </>
)
