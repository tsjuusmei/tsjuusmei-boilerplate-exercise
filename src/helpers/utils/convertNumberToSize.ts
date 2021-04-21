export const convertNumberToSize = (convertibleNumber: number): string => {
  switch (convertibleNumber) {
  case 16:
    return 'sm'
    break
  case 20:
    return 'md'
    break
  case 24:
    return 'lg'
    break
  default:
    throw new Error('err')
  }
}
