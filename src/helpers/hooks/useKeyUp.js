import { useEffect } from 'react'

export default function useKeyUp(targetKey, handler) {
  const onKeyUp = ({ key }) => {
    if (key === targetKey) handler()
  }

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])
}
