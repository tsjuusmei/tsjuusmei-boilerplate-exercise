import { useEffect } from 'react'

function useOnClickOutside(
  ref: React.RefObject<HTMLInputElement>,
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

export default useOnClickOutside
