import { truncateString } from '../truncateString'

describe('truncateString', () => {
  it.each([
    ['Lorem ipsum dolor sit.', 22, 'Lorem ipsum dolor sit....'],
    ['Lorem ipsum dolor sit.', 21, 'Lorem ipsum dolor sit...'],
    ['Lorem ipsum dolor sit.', 20, 'Lorem ipsum dolor si...'],
    ['Lorem ipsum dolor sit.', 19, 'Lorem ipsum dolor s...'],
    ['Lorem ipsum dolor sit.', 18, 'Lorem ipsum dolor...'], // Space gets stripped?
    ['Lorem ipsum dolor sit.', 17, 'Lorem ipsum dolor...']
  ])('transforms %s to %s', (string, max, result) => {
    // WHEN
    // I call truncateString with a string
    const expected = truncateString(string, max)

    // THEN
    // I expect the result to be a kebab cases version of the same string
    expect(expected).toEqual(result)
  })

  it.each([undefined, null])(
    'throws an error if it is called with %s',
    (badArgument) => {
      // WHEN
      // I call truncateString with a bad argument

      // THEN
      // I expect an error to have been thrown
      expect(() => {
        truncateString(badArgument)
      }).toThrow()
    }
  )
})
