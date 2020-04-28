import React from 'react'

// Components
import Button from '../components/atoms/Button'

function Homepage() {
  return (
    <main className="home">
      <div className="container-md">
        <div className="grid">
          <div className="col-6">
            <h1 className="title-layer1-700">Next Boilerplate</h1>
            <Button>Button</Button>
          </div>
          <div className="col-6">
            <h1 className="title-layer1-700">Next Boilerplate</h1>
            <Button>Button</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Homepage
