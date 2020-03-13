import { NextPage } from 'next'

// Components
import Button from '../components/atoms/Button'

const Homepage: NextPage = () => (
  <main className="home">
    <div className="grid">
      <div className="container-sm">
        <h1 className="title-layer1-700">Next Boilerplate Typescript</h1>
        <Button
          variation='primary'
          size='l'
        >
          Doe is
        </Button>
      </div>
    </div>
  </main>
)

export default Homepage
