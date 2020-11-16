import { capitalize } from '../capitalize'

describe('capitalize', () => {
  it.each([
    ['this is a title', 'This is a title'],
    ['THIS IS A TITLE', 'THIS IS A TITLE'],
    ['This Is A Title', 'This Is A Title']
  ])('transforms %s to %s', (before: string, after: string) => {
    // WHEN
    // I call capitalize with a string
    const expected = capitalize(before)

    // THEN
    // I expect the result to be a capitalized version of the same string
    expect(expected).toEqual(after)
  })

  it.each([undefined, null])(
    'throws an error if it is called with %s',
    (badArgument: string) => {
      // WHEN
      // I call capitalize with a bad argument

      // THEN
      // I expect an error to have been thrown
      expect(() => {
        capitalize(badArgument)
      }).toThrow()
    }
  )
})
