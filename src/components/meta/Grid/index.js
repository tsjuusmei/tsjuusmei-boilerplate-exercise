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
  cols = 12,
  container = false,
  auto = false,
  rows = 'auto',
  gap = 'auto',
  align,
  children,
  size = 'lg',
  ...props
}) => {
  const classNames = [
    ...(container ? [`container-${size}`] : []),
    styles.grid
  ].join(' ')

  const properties = {

  }

  return (
    <div
      className={classNames}
      style={{
        '--cols': cols,
        '--rows': rows,
        '--gap': gap,
        '--align': align
      }}
      {...props}
    >
      {/* React.cloneElement(children, { className: "active" }) */}
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
