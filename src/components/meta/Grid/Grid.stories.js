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

// export const Default = () => (
//   <Grid cols={1} gap="10px 0px" container wrap>
//     {[...Array(12)].map((_, idx) => (
//       <Grid key={idx} cols={idx + 1} gap="32px" wrap>
//         {/* {[...Array(idx + 1)].map((_, idx) => (
//           <Cell key={idx} span={idx + 1}>
//             */}
//         <SampleComponent />
//         {/*
//           </Cell>
//         ))} */}
//       </Grid>
//     ))}
//   </Grid>
// )

export const Default = () => (
  <Grid gap="10px 0" container>
    <Grid gap="0 10px" cols={1} wrap>
      <Cell>
        <SampleComponent />
      </Cell>
    </Grid>
    <Grid gap="0 10px" cols={2} wrap>
      <Cell>
        <SampleComponent span="1/2" />
      </Cell>
      <Cell>
        <SampleComponent span="1/2" />
      </Cell>
    </Grid>
    <Grid gap="0 10px" cols={3} wrap>
      <Cell>
        <SampleComponent span="1/3" />
      </Cell>
      <Cell>
        <SampleComponent span="1/3" />
      </Cell>
      <Cell>
        <SampleComponent span="1/3" />
      </Cell>
    </Grid>
    <Grid gap="0 10px" cols={4} wrap>
      <Cell>
        <SampleComponent span="1/4" />
      </Cell>
      <Cell>
        <SampleComponent span="1/4" />
      </Cell>
      <Cell>
        <SampleComponent span="1/4" />
      </Cell>
      <Cell>
        <SampleComponent span="1/4" />
      </Cell>
    </Grid>
  </Grid>
)

export const UnorderedList = () => (
  <div className="container-lg">
    <Grid gap="32px" cols={6}>
      <ul>
        {[...Array(12)].map((_, idx) => (
          <Cell key={idx}>
            <li>Lorem ipsum dolor sit List Item — {idx + 1} (renders as <code>&lt;li&gt;)</code></li>
          </Cell>
        ))}
      </ul>
    </Grid>
  </div>
)

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
  <div className="container-lg">
    <Grid gap="10px" cols={3}>
      <Cell span={3} wrap>
        <SampleImage />
      </Cell>
      <Cell span={1}>
        <SampleImage />
      </Cell>
      <Cell span={2} wrap>
        <SampleImage />
      </Cell>
    </Grid>
  </div>
)

export const BlogPost = () => (
  <Grid gap="24px" container cols={3}>
    <Cell span="full">
      <img style={{ width: '100%' }} src="//picsum.photos/1920/480" alt="" />
    </Cell>
    <Cell span="full" start={2}>
      <h1>Grid Systems</h1>
      <h2 className="h5">Raster Systeme für die Visuelle Gestaltung</h2>
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
