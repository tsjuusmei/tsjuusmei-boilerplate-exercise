import React from 'react'

import { cell } from './cell.module.scss'

const Cell = ({
  start,
  end,
  place = '',
  span,
  children,
  wrap,
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

  const properties = {
    'data-cell': true,
    ...(span ? { 'data-span': span } : {}),
    ...(start ? { 'data-start': start } : {}),
    ...(end ? { 'data-end': end } : {}),
    style: {
      ...(span ? { '--span': span === 'full' ? '1 / -1' : span, } : {}),
      ...(justify ? { '--justify': justify } : {}),
      ...(align ? { '--align': align } : {}),
      ...(start ? { '--start': start } : {}),
      ...(end ? { '--end': end } : {}),
    }
  }
  const elements = React.Children.toArray(children)
  // if (elements.length > 1 \\ elements.some((child) => child.type.name !== 'Grid')) { }
  // console.log(elements)
  // if (elements.length === 1 && elements.some((child) => child.type.name !== 'Cell')) {
  if (!wrap) {
    return React.cloneElement(children, {
      ...properties,
      ...props,
      // ...children[0].props
    })
  }

  return (
    <div
      {...properties}
      {...props}
    >
      {children}
    </div>
  )
}

export default Cell
