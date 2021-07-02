import * as React from 'react'
import Link from 'next/link'

// Components
import Icon, { IconName } from '@/components/atoms/Icon'

// Styling
import styles from './SubnavItem.module.scss'

export type SubnavItemProps = {
  iconName?: IconName
  href: string
  title: string
  description?: string
}

const SubnavItem: React.FC<SubnavItemProps> = ({
  iconName,
  href = '',
  title = '',
  description
}) => (
  <div className={`
    ${styles['subnav-item']}
    ${description ? styles.description : styles['no-description']}
  `}>
    {
      iconName && <Icon name={iconName}/>
    }
    <Link href={href}>
      <a>
        <h5>
          {title}
        </h5>
        <p className="body-m">
          {description}
        </p>
      </a>
    </Link>

  </div>
)

export default React.memo(SubnavItem)
