import * as React from 'react'
import Image from 'next/image'

// Styling
import styles from './Avatar.module.scss'

export type AvatarProps = {
  src: string
  alt: string,
  size?: string,
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  className,
  ...props
}) => (
  <div className={`${styles.avatar} ${styles[size]} ${className}`} {...props}>
    <Image src={src} alt={alt} width={152} height={152} />
  </div>
)

export default Avatar
