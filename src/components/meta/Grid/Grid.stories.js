import React from 'react'
import { withA11y } from '@storybook/addon-a11y'

import Grid, { Cell } from '.'

export default {
  title: 'Meta / Grid',
  decorators: [withA11y],
}

const Div = ({ span = 'auto' }) => (
  <div style={{
    background: 'black',
    color: 'white',
    padding: '12px 16px',
    textAlign: 'center'
  }}
  >{span === 'auto' ? '' : `${span} columns`}
  </div>
)

export const Auto = () => (
  <Grid cols={1} gap="10px 0px">
    {[...Array(12)].map((_, idx) => (
      <Grid key={idx} cols={idx + 1} gap="32px">
        {[...Array(idx + 1)].map((_, idx) => (
          <Cell key={idx} span={idx + 1}>
            <Div />
          </Cell>
        ))}
      </Grid>
    ))}
  </Grid>
)
export const OneThree = () => (
  <Grid cols={1} gap="10px">
    <Cell span={1}>
      <Div />
    </Cell>
    <Cell span={2}>
      <Div />
    </Cell>
  </Grid>
)
