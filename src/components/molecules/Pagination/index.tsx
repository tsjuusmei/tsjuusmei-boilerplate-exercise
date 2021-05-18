import React from 'react'

import styles from './Pagination.module.scss'

export interface PaginationProps{
  current: number
  nextPage: void
  prevPage: void
  numPages: number
  handleFirst: void
  handleLast: void
}

const Pagination: React.FunctionComponent<PaginationProps> = ({
  current, nextPage, prevPage, numPages, handleFirst, handleLast
}) => {
  return (
    <>
      <div className={styles.flex}>
        {
          current > 1 &&
            <span tabIndex={0} role="button" onClick={handleFirst} onKeyDown={handleFirst}>1</span>
        }
        <button onClick={prevPage}> ◀︎ </button>
        <span tabIndex={0} role="button" className={styles.active}>{current}</span>
        <button onClick={nextPage}> ▶︎ </button>
        {
          current < numPages &&
          <span tabIndex={0} role="button" onClick={handleLast} onKeyDown={handleLast}>{numPages}</span>
        }
      </div>
    </>
  )
}

export default Pagination
