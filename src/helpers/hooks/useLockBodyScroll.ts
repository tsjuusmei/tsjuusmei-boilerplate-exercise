import { useLayoutEffect } from 'react'

export default function useLockBodyScroll() {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden'
    // eslint-disable-next-line no-return-assign
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])
}
