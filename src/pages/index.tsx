import * as React from 'react'
import { NextPage } from 'next'

// Components
import Grid, { Col } from '@/components/meta/Grid'

const Homepage: NextPage = () => (
  <main className="home">
    <Grid cols={12} size="sm">
      <Col span={12}>
        <h1>h1: The face of the moon was in shadow.</h1>
        <h2>h2: The face of the moon was in shadow.</h2>
        <h3>h3: The face of the moon was in shadow.</h3>
        <h4>h4: The face of the moon was in shadow.</h4>
        <h5>h5: The face of the moon was in shadow.</h5>
        <h6>h6: The face of the moon was in shadow.</h6>
        <p className="streamer">Streamer: The face of the moon was in shadow.</p>
        <p className="quote-lg">Quote LG: The face of the moon was in shadow.</p>
        <p className="quote-md">Quote MD: The face of the moon was in shadow.</p>
        <p className="body-lg">Body LG: The face of the moon was in shadow.</p>
        <p className="body-md">Body MD: The face of the moon was in shadow.</p>
        <p className="body-sm">Body SM: The face of the moon was in shadow.</p>
        <a className="textlink-lg" href="/" >Textlink LG: The face of the moon was in shadow.</a><br/>
        <a className="textlink-md" href="/" >Textlink MD: The face of the moon was in shadow.</a><br/>
        <a className="textlink-sm" href="/" >Textlink SM: The face of the moon was in shadow.</a><br/>
        <p className="caption">Caption: The face of the moon was in shadow.</p>
        <p className="eyebrow">Eyebrow: The face of the moon was in shadow.</p>
        <a className="footerlink-md" href="/" >Footerlink MD: The face of the moon was in shadow.</a><br/>
        <a className="footerlink-sm" href="/" >Footerlink SM: The face of the moon was in shadow.</a><br/>
        <p className="fluid-1-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-2-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-3-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-4-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-5-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-6-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-7-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-8-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-9-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-10-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-11-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-12-xl-size">Fluid: The face of the moon was in shadow.</p>
        <p className="fluid-13-xl-size">Fluid: The face of the moon was in shadow.</p>
      </Col>
    </Grid>
  </main>
)

export default Homepage
