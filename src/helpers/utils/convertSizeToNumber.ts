export const convertSizeToNumber = (convertibleSize: string): number => {
  switch (convertibleSize) {
  case 'sm':
    return 16
  case 'md':
    return 20
  case 'lg':
    return 24
  default:
    throw new Error('err')
  }
}
