import React from 'react'

// Components
import Button from '../components/atoms/Button'

function Homepage() {
  return (
    <main className="home">
      <div className="container-md">
        <div className="grid">
          <div className="col-6">
            <h2>Next Boilerplate</h2>
            <Button>Button</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Homepage
