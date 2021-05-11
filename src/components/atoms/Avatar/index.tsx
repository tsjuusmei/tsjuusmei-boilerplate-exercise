import * as React from 'react'
import Image from 'next/image'

// Styling
import styles from './Avatar.module.scss'

// Types
export enum AvatarSize {
  XSmall = 'xsm',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  XLarge = 'xlg',
  XXLarge = 'xxlg',
  XXXLarge = 'xxxlg',
}

export type AvatarProps = {
  src: string
  size: AvatarSize,
  alt: string,
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = AvatarSize.Medium,
  className = '',
  ...props
}) => (
  <div className={`${styles.avatar} ${styles[size]} ${className}`} {...props}>
    <Image src={src} alt={alt} width={152} height={152} />
  </div>
)

export default Avatar
