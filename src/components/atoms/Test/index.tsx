import React from 'react'

// Types
type TestProps = {
  name?: string
}

// Styling
import styles from './test.module.scss'

const Test: React.FC<TestProps> = ({ name }) => (
  <div className={styles['test']}>
    <p>{name}</p>
  </div>
)

export default Test
