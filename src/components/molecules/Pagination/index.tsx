import { array } from 'prop-types'
import React, {useEffect, useState} from 'react'

import styles from './Pagination.module.scss'

export interface Props{
  currentPage?: number
  componentList: Array<any>
  recordsPerPage?: number
}

const Pagination: React.FunctionComponent<Props> = ({
  currentPage = 1, componentList, recordsPerPage = 2
}) => {
  const [btnNext, setBtnNext] = useState('btn-hidden')
  const [btnPrev, setBtnPrev] = useState('btn-hidden')
  const [current, setCurrent] = useState(currentPage)

  const numPages = () => {
    return Math.ceil(componentList.length / recordsPerPage)
  }

  const changePage = (page: number) => {

    if (page < 1){
      page = 1
      setCurrent(page)
    }
    if (page > numPages()){
      page = numPages()
      setCurrent(page)
    }

    if (page === 1) {
      setBtnPrev('btn-hidden')
    } else {
      setBtnPrev('btn')
    }

    if (page === numPages()) {
      setBtnNext('btn-hidden')
    } else {
      setBtnNext('btn')
    }
  }

  const prevPage = () => {
    if (current > 1) {
      setCurrent(current - 1)
      changePage(current - 1)
    }
  }
  const nextPage = () => {
    if (current < numPages()) {
      setCurrent(current + 1)
      changePage(current + 1)
    }
  }

  useEffect (() => {
    changePage(1)
  }, [])

  return (
    <>
      {componentList.filter(component => (
        componentList.indexOf(component) < (current * recordsPerPage)
        && componentList.indexOf(component) >= (current - 1) * recordsPerPage
      )).map(component => (
        <div key={component[componentList.indexOf(component)]}>
          {component}
        </div>
      ))}
      <div className={styles.flex}>
        {
          current > 1 &&
            <p>1</p>
        }
        <button onClick={prevPage} className={styles[btnPrev]}> ◀︎ </button>
        <p className={styles.active}>{current}</p>
        <button onClick={nextPage} className={styles[btnNext]}> ▶︎ </button>
        {
          current < numPages () &&
          <p>{numPages()}</p>
        }
      </div>
    </>
  )
}

export default Pagination
