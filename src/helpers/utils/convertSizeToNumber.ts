export const convertSizeToNumber = (convertibleSize: string): number => {
  switch (convertibleSize) {
  case 'sm':
    return 16
    break
  case 'md':
    return 20
    break
  case 'lg':
    return 24
    break
  default:
    throw new Error('err')
  }
}
