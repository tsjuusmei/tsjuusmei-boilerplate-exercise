import React from 'react'
import { withA11y } from '@storybook/addon-a11y'

import Grid, { Cell } from '.'

export default {
  title: 'Meta / Grid',
  decorators: [withA11y],
}

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

export const Default = () => (
  <Grid gap="0 10px" container>
    <Cell>
      <SampleComponent />
    </Cell>
    <Cell>
      <SampleComponent />
    </Cell>
    <Cell>
      <SampleComponent />
    </Cell>
    <Cell>
      <SampleComponent />
    </Cell>
  </Grid>
)

export const UnorderedList = () => (
  <div className="container-lg">
    <Grid gap="0 10px">
      <ul>
        {[...Array(12)].map((_, idx) => (
          <Cell key={idx}>
            <li>List item {idx + 1}</li>
          </Cell>
        ))}
      </ul>
    </Grid>
  </div>
)

const SampleImage = () => (
  <img style={{ objectFit: 'cover', maxWidth: '100%' }} src="//picsum.photos/400/400" alt="" />
)

export const ImageGallery = () => (
  <div className="container-lg">
    <Grid gap="10px" cols={3}>
      <Cell span={3} wrap>
        <SampleImage />
      </Cell>
      <Cell span={1}>
        <SampleImage />
      </Cell>
      <Cell>
        <SampleImage />

      </Cell>
    </Grid>
  </div>
)

export const PredefinedCols = () => (
  <Grid gap="10px 0" container>
    <Grid gap="0 10px" cols={2}>
      <Cell span={2}>
        <SampleComponent span={2} />
      </Cell>
      <Cell span={3}>
        <SampleComponent span={3} />
      </Cell>
      <Cell>
        <SampleComponent span={3} />
      </Cell>
      <Cell span={2}>
        <SampleComponent span={2} />
      </Cell>
    </Grid>
  </Grid>
)

export const BlogPost = () => (
  <Grid gap="24px" container cols={3}>
    <Cell span="full">
      <img style={{ width: '100%' }} src="//picsum.photos/1920/480" alt="" />
    </Cell>
    <Cell span="full" start={2}>
      <h1>Why Grids matter</h1>
    </Cell>
    <Cell span={1}>
      <aside>
        <p>I'm an aside — Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, voluptatum!</p>
      </aside>
    </Cell>
    <Cell span={2}>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatem esse amet corrupti necessitatibus,
          sunt dicta iusto! Delectus pariatur similique praesentium deleniti maiores eius libero deserunt sapiente nulla
          hic perspiciatis ullam velit commodi cumque amet quae sint nihil iusto exercitationem dicta quas eveniet,
          reiciendis ex. Inventore laborum ipsa similique dolor iusto nisi asperiores eaque quas? Asperiores dicta rem
          et est. Quo quidem dicta odit et qui dolore! Doloremque est iste id ea, iure sapiente quo sequi placeat cumque
          voluptas deleniti?
        </p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatem esse amet corrupti necessitatibus,
          sunt dicta iusto! Delectus pariatur similique praesentium deleniti maiores eius libero deserunt sapiente nulla
          hic perspiciatis ullam velit commodi cumque amet quae sint nihil iusto exercitationem dicta quas eveniet,
          reiciendis ex. Inventore laborum ipsa similique dolor iusto nisi asperiores eaque quas? Asperiores dicta rem
          et est. Quo quidem dicta odit et qui dolore! Doloremque est iste id ea, iure sapiente quo sequi placeat cumque
          voluptas deleniti?
        </p>
      </main>
    </Cell>
  </Grid>
)
