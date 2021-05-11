import * as React from 'react'
import { NextPage } from 'next'

// Components
import Grid, { Col, GridSize } from '@/components/meta/Grid'

const Homepage: NextPage = () => (
  <main className="home">
    <Grid cols={12} size={GridSize.Small}>
      <Col span={12}>
        <h1>h1: The face of the moon was in shadow.</h1>
        <h2>h2: The face of the moon was in shadow.</h2>
        <h3>h3: The face of the moon was in shadow.</h3>
        <h4>h4: The face of the moon was in shadow.</h4>
        <h5>h5: The face of the moon was in shadow.</h5>
        <h6>h6: The face of the moon was in shadow.</h6>
        <p className="heading-9-xl">Fluid: heading-9-xl</p>
        <p className="heading-8-xl">Fluid: heading-8-xl</p>
        <p className="heading-7-xl">Fluid: heading-7-xl</p>
        <p className="heading-6-xl">Fluid: heading-6-xl</p>
        <p className="heading-5-xl">Fluid: heading-5-xl</p>
        <p className="heading-4-xl">Fluid: heading-4-xl</p>
        <p className="heading-3-xl">Fluid: heading-3-xl</p>
        <p className="heading-2-xl">Fluid: heading-2-xl</p>
        <p className="heading-1-xl">Fluid: heading-1-xl</p>
        <p className="heading-l">Fluid: heading-l</p>
        <p className="heading-m">Fluid: heading-m</p>
        <p className="heading-s">Fluid: heading-s</p>
        <p className="body-2-xl">Fluid: body-2-xl</p>
        <p className="body-1-xl">Fluid: body-1-xl</p>
        <p className="body-l">Fluid: body-l</p>
        <p className="body-m">Fluid: body-m</p>
        <p className="body-s">Fluid: body-s</p>
      </Col>
    </Grid>
  </main>
)

export default Homepage
