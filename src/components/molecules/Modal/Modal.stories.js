import React, { useState } from 'react'
import { withA11y } from '@storybook/addon-a11y'
import Button from '@/components/atoms/Button'
import Modal from '.'

export default {
  title: 'Components / Molecules / Modal',
  component: Modal,
  decorators: [withA11y]
}

export const Default = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="input-wrapper">
      <Button onClick={() => setIsModalOpen(!isModalOpen)}>
        Open Modal here!
      </Button>

      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <div
          className="wrapper"
          style={{
            background: 'white',
            width: '70%',
            borderRadius: 8,
            padding: 32,
          }}
        >
          <h2>This is a modal</h2>
          <p>Fusce eget cursus urna. Cras ultricies diam dapibus nibh lacinia iaculis. Cras non vulputate diam. Morbi gravida turpis eu risus commodo commodo. Nulla porta urna bibendum, rutrum mi vitae, euismod sem. In hac habitasse platea dictumst. Nullam pulvinar tellus a sodales condimentum. In id quam iaculis, volutpat diam quis, vehicula sem. Cras nec nisl ut metus tincidunt accumsan eu et orci. Cras bibendum blandit arcu a imperdiet. Curabitur gravida aliquet nisl, sed fringilla libero. Vestibulum pretium lacus enim, a pharetra tortor vehicula eu.</p>
        </div>
      </Modal>
    </div>
  )
}
