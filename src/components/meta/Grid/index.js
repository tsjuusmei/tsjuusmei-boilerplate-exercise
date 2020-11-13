import React from 'react'
import PropTypes from 'prop-types'

// Styling
import styles from './grid.module.scss'

import Cell from './Cell'

// TODO: More control between different viewports
// TODO: Change column amount based on viewport
// TODO: More flexible horizontal padding within columns
// TODO: Add option to change alignment of columns
// TODO: Add container size to Grid parent
// TODO: Use it as a GitHub package (https://github.com/features/packages)

const Grid = ({
  cols,
  // auto = false,
  rows,
  gap,
  align,
  children,
  container = false,
  size = 'lg',
  ...props
}) => {
  const classNames = [
    ...(container ? [`container-${size}`] : []),
    styles.grid
  ].join(' ')

  const properties = {
    'data-grid': true,
    ...(container ? [`data-container-${size}`] : []),
    ...(cols ? { 'data-cols': true } : {}),
    ...(rows ? { 'data-rows': true } : {}),
    style: {
      ...(cols ? { '--cols': cols } : {}),
      ...(rows ? { '--rows': rows } : {}),
      ...(gap ? { '--gap': gap } : {}),
      ...(align ? { '--align': align } : {}),
    }
  }

  const elements = React.Children.toArray(children)

  if (elements.length === 1 && elements.some((child) => child.type.name !== 'Grid')) {
    return React.cloneElement(children, {
      ...properties, ...props, ...children.props
    })
  }

  return (
    <div
      data-grid="true"
      {...properties}
      {...props}
    >
      {children}
    </div>
  )
}

Grid.propTypes = {
  align: PropTypes.any,
  auto: PropTypes.bool,
  children: PropTypes.any,
  cols: PropTypes.number,
  container: PropTypes.bool,
  gap: PropTypes.string,
  rows: PropTypes.string,
  size: PropTypes.string
}

export default Grid
export { Cell }
