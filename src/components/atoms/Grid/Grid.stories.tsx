import React from 'react'
import Grid, { Col } from '.'

const spanOptions = [12, 6, 4, 3, 2, 1]

const SampleComponent = ({ span = 'auto' }) => (
  <div style={{
    background: '#A0AEC0',
    border: '1px solid #4A5568',
    color: 'black',
    padding: '12px 16px',
    textAlign: 'center'
  }}
  >{`${span} columns`}
  </div>
)

export default {
  title: 'Components / Atoms / Grid',
  component: Grid,
  argTypes: {
    cols: {
      control: {
        type: 'select',
        options: spanOptions
      }
    }
  }
}

type ColumnProps = {
  cols: 12 | 6 | 4 | 3 | 2 | 1,
  size: Sizes
}

export const Columns = (args: ColumnProps) => {
  const amount = 12 / args.cols
  const arr = Array(amount).fill(0)

  return (
    <Grid {...args}>
      { arr.map((_, idx) => (
        <Col span={args.cols} key={idx}>
          <p>{args.cols} col(s)</p>
        </Col>
      ))}
    </Grid>
  )
}

Columns.args = {
  cols: 12,
  size: 'lg'
}

const SampleImage = () => (
  <img
    style={{
      objectFit: 'cover',
      width: '100%',
      maxWidth: '100%'
    }}
    height={400}
    src="//picsum.photos/800/400"
    alt=""
  />
)

export const ImageGallery = () => (
  <Grid cols={12} size="lg">
    <Col span={12}>
      <SampleImage />
    </Col>
    <Col span={8}>
      <SampleImage />
    </Col>
    <Col span={4}>
      <SampleImage />
    </Col>
    <Col span={6}>
      <SampleImage />
    </Col>
    <Col span={6}>
      <SampleImage />
    </Col>
  </Grid>
)
