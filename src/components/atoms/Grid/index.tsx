import React from 'react'

import Col from './Col/'

// Styling
import './grid.module.scss'

export type Props = {
  cols: number,
  className?: string,
  size: Sizes
}

const Grid: React.FC<Props> = ({
  cols = 12,
  children,
  className,
  size = 'lg',
  ...props
}) => {
  const properties = {
    'data-grid': true,
    'data-container-size': size,
    ...(cols ? { 'data-cols': cols } : {}),
  }

  return (
    <div
      {...properties}
      className={`${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

Grid.displayName = 'Grid'

export default Grid
export { Col }
