import { useEffect } from 'react'

export default function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: (e: Event) => void
) {
  useEffect(
    () => {
      const listener = (e: Event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(<HTMLElement>e.target)) {
          return
        }

        handler(e)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    [ref, handler]
  )
}
