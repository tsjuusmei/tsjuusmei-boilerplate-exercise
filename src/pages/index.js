import React from 'react'

// Components
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'

function Homepage() {
  return (
    <main className="home">
      <div className="container-md">
        <div className="grid">
          <div className="col-6">
            <h2>Next Boilerplate</h2>
            <Button>Default</Button>
            <Button href="https://yummygum.com">External link</Button>
            <Button to="/somewhere">Internal route</Button>

            <Input
              name="input-name"
              id="input"
              type="text"
              size="large"
              placeholder="Text goes here"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Homepage
