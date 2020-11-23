import * as React from 'react'
import { withA11y } from '@storybook/addon-a11y'

const headings = ['1', '2', '3', '4', '5', '6']

export default {
  title: 'Elements / Typography',
  decorators: [withA11y]
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export const Headings: React.FC = () => (
  <>
    <div>
      {headings.map((heading: string, idx: number) => {
        const Tag = `h${heading}` as HeadingTag

        return (
          <div key={idx}>
            <Tag>{`Heading ${heading}`}</Tag>
          </div>
        )
      })}
    </div>
  </>
)
