import React from 'react'

// Components
import Avatar from '@/components/atoms/Avatar'

// Style
import styles from './Author.module.scss'

// Types
export type AuthorProps = {
  className?: string,
  avatarSrc?: string,
  avatarAlt?: string,
  name?: string,
  role?: string
}

const Author: React.FC<AuthorProps> = ({
  className = '',
  avatarSrc,
  avatarAlt,
  name,
  role
}) => {
  return (
    <div
      className={`
        ${styles.author}
        ${className ? className : ''}
      `}
    >
      <Avatar src={avatarSrc} alt={avatarAlt} className={styles.avatar} />
      <div>
        <h5>{name}</h5>
        {role &&
          <p className="body-sm">{role}</p>
        }
      </div>
    </div>
  )
}

export default Author
