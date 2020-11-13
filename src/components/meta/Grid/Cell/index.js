import React from 'react'

import { cell } from './cell.module.scss'

const Cell = ({
  place = 'center center',
  span,
  children,
  ...props
}) => {
  const [justify, align] = [...place.split(' ').map((property) => {
    let alignment = 'stretch'
    switch (property) {
      case 'left':
        alignment = 'start'
        break
      case 'right':
        alignment = 'end'
        break
      case 'top':
        alignment = 'start'
        break
      case 'bottom':
        alignment = 'end'
        break

      default:
        alignment = 'stretch'
        break
    }

    return alignment
  })]

  return (
    <div
      className={cell}
      style={{
        '--span': span === 'full' ? '1 / -1' : span,
        '--justify': justify,
        '--align': align,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Cell
