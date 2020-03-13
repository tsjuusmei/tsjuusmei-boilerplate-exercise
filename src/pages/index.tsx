import * as React from 'react'
import { NextPage } from 'next'

// Components
import Button from '../components/atoms/Button'

const Homepage: NextPage = () => {
  return (
    <main className="home">
      <div className="grid">
        <div className="container-sm">
          <h1 className="title-layer1-700">Next Boilerplate</h1>
          <Button>Doe is</Button>
        </div>
      </div>
    </main>
  )
}

export default Homepage
