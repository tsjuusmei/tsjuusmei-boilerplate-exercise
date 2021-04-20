import React from 'react'
import Image from 'next/image'

// Types
type Props = {
  src: string,
  alt: string,
  className?: string,
  width?: string,
  height?: string,
}

const ImageTestimonial: React.FC<Props> = ({
  src,
  alt,
  className = '',
  width = '684px',
  height = '380px'
}) => <Image alt={alt} src={src} className={className} width={width} height={height}  />

export default React.memo(ImageTestimonial)
