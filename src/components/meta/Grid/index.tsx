import React from 'react'

// Components
import Col from './Col/'

// Types
export enum GridSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export type GridProps = {
  cols?: number,
  className?: string,
  size: GridSize,
  gap?: string,
  align?: string
}

const Grid: React.FC<GridProps> = ({
  cols = 12,
  children,
  className,
  size = GridSize.Large,
  gap,
  align,
  ...props
}) => {
  const properties = {
    'data-grid': true,
    'data-container-size': size,
    ...(cols ? { 'data-cols': cols } : {}),
    ...(align ? { 'data-align': true } : {}),
    ...(gap ? { 'data-gap': gap } : {}),
    style: {
      ...(gap ? { '--gap': gap } : {}),
      ...(align ? { '--align': align } : {}),
    } as React.CSSProperties
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
