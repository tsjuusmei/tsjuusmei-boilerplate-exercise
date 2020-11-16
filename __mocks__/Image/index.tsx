import React from 'react'

type ImageProps = Omit<JSX.IntrinsicElements['img'], 'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading'> & {
  src: string;
  quality?: number | string;
  priority?: boolean;
  unoptimized?: boolean;
} & ({
  width: number | string;
  height: number | string;
  unsized?: false;
} | {
  width?: number | string;
  height?: number | string;
  unsized: true;
});
const Image = ({
  src, alt, ...props
}: ImageProps): React.ReactElement => (
  <img
    src={src}
    alt={alt}
    {...props}
  />
)
export default Image
