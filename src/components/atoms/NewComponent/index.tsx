import React from 'react'

// Types
type NewComponentProps = {
  name?: string
}

// Styling
import styles from './NewComponent.module.scss'

const NewComponent: React.FC<NewComponentProps> = ({ name }) => (
  <div className={styles['NewComponent']}>
    <p>{name}</p>
  </div>
)

export default NewComponent
