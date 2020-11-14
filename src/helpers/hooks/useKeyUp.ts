import { useEffect, useCallback } from 'react'

export default function useKeyUp(
  targetKey: KeyboardEvent["key"],
  handler: () => void
) {
  const upHandler = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        handler()
      }
    },
    [targetKey],
  )

  useEffect(() => {
    if (typeof window !== "object") {
      return;
    }

    window.addEventListener("keyup", upHandler)

    return () => {
      window.removeEventListener("keyup", upHandler)
    }
  }, [upHandler])
}
