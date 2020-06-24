import React, { useState } from 'react'

// Components
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import TextArea from '@/components/atoms/TextArea'
import Select from '@/components/atoms/Select'
import Modal from '@/components/molecules/Modal'

function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main className="home">
      <div className="container-md">
        <div className="grid">
          <div className="col-6">
            <h2>Next Boilerplate</h2>
            <Button>Default</Button>
            <Button href="https://yummygum.com">External link</Button>
            <Button to="/somewhere">Internal route</Button>
            <Button onClick={() => setIsModalOpen(true)}>Open modal</Button>

            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
              Hooray! The modal has been opened!
              <Input
                name="input-name"
                id="input"
                type="text"
                size="large"
                placeholder="Text goes here"
                label="Input field"
              />
            </Modal>

            <Input
              name="input-name"
              id="input"
              type="text"
              size="large"
              placeholder="Text goes here"
              label="Input field"
            />

            <TextArea
              name="text-area-name"
              id="input"
              type="text"
              size="large"
              placeholder="Text goes here"
              label="Text area"
            />

            <Select
              name="select-name"
              id="input"
              type="text"
              label="Select"
              placeholder="Text goes here"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
            </Select>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Homepage
