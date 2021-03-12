import React from 'react'

import styles from './Disclosure.styles.scss'

import Icon from  '@/components/atoms/Icon'

export type DisclosureProps = {
  summary: string,
  body: string,
}

const Disclosure: React.FC<DisclosureProps> = ({
  summary,
  body
}) => (
  <details className={styles.details}>
    <summary>
      <Icon name="plus"/>
      <Icon name="minus" />
      <div>
        <h5>{summary}</h5>
        <Icon name="chevron" size={18}/>
      </div>
    </summary>
    <p>{body}</p>
  </details>
)

export default Disclosure
