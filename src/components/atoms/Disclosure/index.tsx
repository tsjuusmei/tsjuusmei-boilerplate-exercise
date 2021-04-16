import React from 'react'

// Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from './Disclosure.styles.scss'

export type DisclosureProps = {
  summary: string,
  body: string
}

const Disclosure: React.FC<DisclosureProps> = ({
  summary,
  body
}) => (
  <details className={styles.details}>
    <summary>
      <Icon name="plus" />
      <Icon name="minus" />
      <div>
        <h5>{summary}</h5>
        <Icon name="chevron" size={24} />
      </div>
    </summary>
    <p>{body}</p>
  </details>
)

export default Disclosure
