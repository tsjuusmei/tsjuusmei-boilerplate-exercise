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
        This is text in the Modal children
      </Modal>
    </div>
  )
}
