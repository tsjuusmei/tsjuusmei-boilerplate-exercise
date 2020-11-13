import { useState, useEffect } from 'react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize)

  function getSize() {
    return {
      width: typeof window !== 'undefined' ? window.innerWidth : undefined,
      height: typeof window !== 'undefined' ? window.innerHeight : undefined
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
