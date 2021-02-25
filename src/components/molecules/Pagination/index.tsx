import { array } from 'prop-types'
import React, {useEffect, useState} from 'react'

import styles from './Pagination.module.scss'

interface nextPageFunc {
  (): void
}

interface prevPageFunc {
  (): void
}

export interface Props{
  current: number
  nextPage: nextPageFunc
  prevPage: prevPageFunc
  numPages: number
}

const Pagination: React.FunctionComponent<Props> = ({
  current, nextPage, prevPage, numPages
}) => {
  console.log(numPages)
  return (
    <>
      <div className={styles.flex}>
        {
          current > 1 &&
            <p>1</p>
        }
        <button onClick={prevPage}> ◀︎ </button>
        <p className={styles.active}>{current}</p>
        <button onClick={nextPage}> ▶︎ </button>
        {
          current < numPages &&
          <p>{numPages}</p>
        }
      </div>
    </>
  )
}

export default Pagination
