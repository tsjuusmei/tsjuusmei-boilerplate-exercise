// eslint-disable-next-line no-shadow
export enum IconRotate {
  North = '180deg',
  NorthEast = '-135deg',
  NorthWest = '135deg',
  East = '-90deg',
  South = '0deg',
  SouthEast = '-45deg',
  SouthWest = '45deg',
  West = '90deg'
}

export type IconProps = {
  color?: string,
  size?: number,
  width?: number,
  height?: number,
  className?: string,
  direction?: IconRotate
}

// eslint-disable-next-line no-shadow
export enum IconSize {
  Small = 12,
  Medium = 16,
  Large = 24,
  XLarge = 32,
  XXLarge = 40,
  XXXLarge = 64,
  XXXXLarge = 80,
  XXXXXLarge = 112
}
