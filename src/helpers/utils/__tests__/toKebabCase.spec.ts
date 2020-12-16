import { toKebabCase } from '../toKebabCase'

describe('toKebabCase', () => {
  it.each([
    ['this is a slug', 'this-is-a-slug'],
    ['THIS IS A SLUG', 'this-is-a-slug'],
    ['This Is A Slug', 'this-is-a-slug'],
    ['this', 'this']
  ])('transforms %s to %s', (before: string, after: string) => {
    // WHEN
    // I call toKebabCase with a string
    const expected = toKebabCase(before)

    // THEN
    // I expect the result to be a kebab cases version of the same string
    expect(expected).toEqual(after)
  })

  it.each([undefined, null])(
    'throws an error if it is called with %s',
    (badArgument: string) => {
      // WHEN
      // I call toKebabCase with a bad argument

      // THEN
      // I expect an error to have been thrown
      expect(() => {
        toKebabCase(badArgument)
      }).toThrow()
    }
  )
})
