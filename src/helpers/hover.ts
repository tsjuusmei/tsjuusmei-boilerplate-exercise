import {
  useRef,
  useState,
  useEffect
} from 'react'

function useHover() {
  const [value, setValue] = useState<Boolean>(false)

  const ref = useRef<HTMLInputElement>(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(
    () => {
      const node = ref.current

      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)

        return () => {
          node.removeEventListener('mouseover', handleMouseOver)
          node.removeEventListener('mouseout', handleMouseOut)
        }
      }

      return
  }, [ref])

  return [ref, value]
}

export default useHover
