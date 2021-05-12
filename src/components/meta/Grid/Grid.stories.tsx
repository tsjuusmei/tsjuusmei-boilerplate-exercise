import React from 'react'
import Grid, { Col, GridSize } from '.'

const spanOptions = [12, 6, 4, 3, 2, 1]

type Props = {
  span: number
}

const SampleComponent: React.FC<Props> = ({ span }) => {
  return (
    <div
      style={{
        background: '#A0AEC0',
        border: '1px solid #4A5568',
        color: 'black',
        padding: '12px 16px',
        textAlign: 'center'
      }}
    >
      {`${span}`}
    </div>
  )
}

export default {
  title: 'Meta / Grid',
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
  size: GridSize,
  gap: string
}

export const Columns = (args: ColumnProps) => {
  const amount = 12 / args.cols
  const arr = Array(amount).fill(0)

  return (
    <Grid gap={args.gap} size={args.size}>
      { arr.map((_, idx) => (
        <Col span={args.cols} key={idx}>
          <SampleComponent span={args.cols} />
        </Col>
      ))}
    </Grid>
  )
}

Columns.args = {
  cols: 12,
  size: GridSize.Large,
  gap: '56px'
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
  <Grid gap="20px" cols={12} size={GridSize.Large}>
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

export const BlogPost = () => (
  <>
    <img style={{ width: '100%', marginBottom: '80px' }} src="//picsum.photos/1920/480" alt="" />
    <Grid gap="24px" size={GridSize.Large}>
      <Col span={8} start={5}>
        <h1>Grid Systems</h1>
        <h2 className="h5">Raster Systeme für die Visuelle Gestaltung</h2>
      </Col>
      <Col span={3}>
        <aside>
          <p>I am an aside — Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, voluptatum!</p>
        </aside>
      </Col>
      <Col span={8} start={5}>
        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatem esse amet corrupti necessitatibus,
            sunt dicta iusto! Delectus pariatur similique praesentium deleniti maiores eius libero deserunt sapiente
            nulla hic perspiciatis ullam velit commodi cumque amet quae sint nihil iusto exercitationem dicta quas
            eveniet, reiciendis ex. Inventore laborum ipsa similique dolor iusto nisi asperiores eaque quas? Asperiores
            dicta rem et est. Quo quidem dicta odit et qui dolore! Doloremque est iste id ea, iure sapiente quo sequi
            placeat cumque voluptas deleniti?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatem esse amet corrupti necessitatibus,
            sunt dicta iusto! Delectus pariatur similique praesentium deleniti maiores eius libero deserunt sapiente
            nulla hic perspiciatis ullam velit commodi cumque amet quae sint nihil iusto exercitationem dicta quas
            eveniet, reiciendis ex. Inventore laborum ipsa similique dolor iusto nisi asperiores eaque quas? Asperiores
            dicta rem et est. Quo quidem dicta odit et qui dolore! Doloremque est iste id ea, iure sapiente quo sequi
            placeat cumque voluptas deleniti?
          </p>
        </main>
      </Col>
    </Grid>
  </>
)
