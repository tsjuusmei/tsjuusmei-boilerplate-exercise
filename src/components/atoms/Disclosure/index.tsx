import React from 'react'

// Components
import Icon from '@/components/atoms/Icon'

// Styles
import styles from './Disclosure.styles.scss'

export type DisclosureProps = {
  summary: string,
  body: string,
  hasIcon: boolean
}

const Disclosure: React.FC<DisclosureProps> = ({
  summary,
  body,
  hasIcon
}) => (
  <details className={styles.details}>
    <summary>
      <h5>
        {hasIcon &&
          <>
            <Icon name="minus" size={24} />
            <Icon name="plus" size={24} />
          </>
        }
        {summary}
        <Icon name="chevron" size={24} />
      </h5>
    </summary>
    <p>{body}</p>
  </details>
)

export default Disclosure
