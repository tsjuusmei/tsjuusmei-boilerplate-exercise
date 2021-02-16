import * as React from 'react'
import Image from 'next/image'

// Styling
import styles from './Avatar.module.scss'

export type Props = {
  src: string
  size?: string,
  alt: string,
  className?: string
}

const Avatar: React.FC<Props> = ({
  src,
  alt,
  size = 'md',
  className = '',
  ...props
}) => (
  <div className={`${styles.avatar} ${styles[size]} ${className}`} {...props}>
    <Image src={src} alt={alt} width={152} height={152} />
  </div>
)

export default Avatar
