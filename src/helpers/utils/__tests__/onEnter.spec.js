import { onEnter } from '../onEnter'

describe('onEnter', () => {
  test.each([
    ['Enter', 13, true],
    ['Enter', 14, true],
    ['Backspace', 13, true],
    ['Backspace', 14, false]
  ])(
    'when event code is %s it calls the callback %s',
    (code, keyCode, shouldCall) => {
      // GIVEN
      // I have a fake event with the provided code and keyCode
      const preventDefault = jest.fn()
      const callback = jest.fn()

      const event = {
        code,
        keyCode,
        preventDefault
      }

      // WHEN
      // I call onEnter with that event
      onEnter(event, callback)

      // THEN
      // I expect preventDefault and the callback to have been called 1 or 0 times,
      // depending on the value of shouldCall
      expect(preventDefault).toHaveBeenCalledTimes(shouldCall ? 1 : 0)
      expect(callback).toHaveBeenCalledTimes(shouldCall ? 1 : 0)
    }
  )
})
