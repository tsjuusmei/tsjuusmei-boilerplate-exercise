import { array } from 'prop-types'
import React, {useEffect, useState} from 'react'

import styles from './Pagination.module.scss'

interface nextPageFunc {
  (): void
}

interface prevPageFunc {
  (): void
}

export interface PaginationProps{
  current: number
  nextPage: nextPageFunc
  prevPage: prevPageFunc
  numPages: number
}

const Pagination: React.FunctionComponent<PaginationProps> = ({
  current, nextPage, prevPage, numPages
}) => {
  return (
    <>
      <div className={styles.flex}>
        {
          current > 1 &&
            <a>1</a>
        }
        <button onClick={prevPage}> ◀︎ </button>
        <a className={styles.active}>{current}</a>
        <button onClick={nextPage}> ▶︎ </button>
        {
          current < numPages &&
          <a>{numPages}</a>
        }
      </div>
    </>
  )
}

export default Pagination
