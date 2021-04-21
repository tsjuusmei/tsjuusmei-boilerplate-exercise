import { convertSizeToNumber } from '../convertSizeToNumber'

describe('convertSizeToNumber', () => {
  it.each([
    ['sm', 16],
    ['md', 20],
    ['lg', 24],
  ])('transforms %s to %s', (before: string, after: number) => {
    // WHEN
    // I call convertSizeToNumber with a string
    const expected = convertSizeToNumber(before)

    // THEN
    // I expect the result to be a size in number
    expect(expected).toEqual(after)
  })

  it.each([undefined, null])(
    'throws an error if it is called with %s',
    (badArgument) => {
      // WHEN
      // I call convertSizeToNumber with a bad argument

      // THEN
      // I expect an error to have been thrown
      expect(() => {
        convertSizeToNumber(badArgument)
      }).toThrow()
    }
  )
})
