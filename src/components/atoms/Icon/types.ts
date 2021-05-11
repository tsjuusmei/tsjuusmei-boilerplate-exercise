export enum IconRotate {
  Up = '180deg',
  Right = '-90deg',
  Down = '0deg',
  Left = '90deg'
}

export type IconProps = {
  color?: string,
  size?: number,
  width?: number,
  height?: number,
  className?: string,
  direction?: IconRotate
}

export enum IconActionSize {
  Small = 16,
  Medium = 20,
  Large = 24
}

export enum IconSocialSize {
  Small = 20,
  Medium = 32,
  Large = 48
}
