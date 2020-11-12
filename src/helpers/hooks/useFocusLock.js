import { useEffect } from 'react'

const FOCUSABLE_SELECTORS = [
  '[contenteditable]:not([contenteditable="false"])',
  '[tabindex]',
  'a[href]',
  'audio[controls]',
  'button',
  'iframe',
  'input',
  'select',
  'textarea',
  'video[controls]'
]

const hasNegativeTabIndex = (el) => el.getAttribute('tabindex') && el.getAttribute('tabindex') < 0

const getFocusableChildNodes = (el) => {
  const selectAll = FOCUSABLE_SELECTORS.join(',')
  const nodelist = el.querySelectorAll(selectAll)

  return Array.from(nodelist || []).filter((node) => !hasNegativeTabIndex(node))
}

export default function useFocusLock(ref) {
  useEffect(() => {
    const prevFocusedElement = document.activeElement

    let focusableNodes = []

    if (ref && ref.current) {
      focusableNodes = getFocusableChildNodes(ref.current)

      const firstNode = focusableNodes[0]
      if (firstNode) firstNode.focus()
    }

    const onKeyDown = (event) => {
      const isTab = event.key === 'Tab'
      const withShiftKey = event.shiftKey

      if (!isTab) return

      const { activeElement } = document

      const first = focusableNodes[0]
      const last = focusableNodes[focusableNodes.length - 1]

      if (activeElement === first && withShiftKey) {
        last.focus()
        event.preventDefault()
        event.stopPropagation()
      } else if (activeElement === last && !withShiftKey) {
        first.focus()
        event.preventDefault()
        event.stopPropagation()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return function cleanup() {
      window.removeEventListener('keydown', onKeyDown)
      if (prevFocusedElement) prevFocusedElement.focus()
    }
  })
}
