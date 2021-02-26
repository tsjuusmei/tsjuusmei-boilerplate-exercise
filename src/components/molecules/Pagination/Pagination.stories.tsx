import React, {useState, useEffect } from 'react'

import Pagination from '.'
import type { PaginationProps } from '.'
import CardTestimonial from '@/components/molecules/CardTestimonial'

export default {
  title: 'Components / Molecules / Pagination',
  component: Pagination
}

export const Default = (args: PaginationProps) => {
  const componentList = [
    <CardTestimonial key="1" quote="The best way to predict the future is to invent it." />,
    <CardTestimonial key="2" quote="If I am not for myself, who is for me? And if I am only for myself, what am I? And if not now, when?" />,
    <CardTestimonial key="3" quote="Everything has beauty, but not everyone can see." />,
    <CardTestimonial key="4" quote="Believe you can and you’re halfway there." />,
    <CardTestimonial key="5" quote="How wonderful it is that nobody need wait a single moment before starting to improve the world." />,
    <CardTestimonial key="6" quote="Imagination is everything. It is the preview of life’s coming attractions." />,
    <CardTestimonial key="7" quote="Change your thoughts and you change your world." />,
    <CardTestimonial key="8" quote="Happiness is not something ready made. It comes from your own actions." />,
    <CardTestimonial key="9" quote="Remember that happiness is a way of travel, not a destination." />,
    <CardTestimonial key="10" quote="Too many of us are not living our dreams because we are living our fears." />
  ]

  const [current, setCurrent] = useState(1)
  const itemsPerPage = 2

  function numPages() {
    return Math.ceil(componentList.length / itemsPerPage)
  }

  function changePage(page: number) {
    if (page < 1){
      setCurrent(1)
    }
    if (page > numPages()){
      setCurrent(numPages())
    }
  }

  function goTo(page: number){
    changePage(page)
    setCurrent(page)
  }

  function nextPage() {
    if (current < numPages()) {
      setCurrent(current + 1)
      changePage(current + 1)
    }
  }

  function prevPage() {
    if (current > 1) {
      setCurrent(current - 1)
      changePage(current - 1)
    }
  }

  useEffect (() => {
    changePage(1)
  }, [])
  return (
    <>
      {componentList.filter(component => (
        componentList.indexOf(component) < (current * itemsPerPage)
        && componentList.indexOf(component) >= (current - 1) * itemsPerPage
      )).map(component => (
        <div key={component[componentList.indexOf(component)]}>
          {component}
        </div>
      ))}
      <Pagination {...args}
        handleFirst={()=> goTo(1)}
        handleLast={()=> goTo(numPages())}
        numPages={numPages()}
        nextPage={nextPage}
        prevPage={prevPage}
        current={current}/>
    </>
  )
}
