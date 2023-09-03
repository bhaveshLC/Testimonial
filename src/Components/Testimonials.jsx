import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

const Testimonials = (props) => {
  let reviews = props.reviews
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1)
    }
    else {
      setIndex(index - 1)
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
  }
  function supriseHandler() {
    let randIdx = Math.floor(Math.random() * reviews.length)
    setIndex(randIdx)
  }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white mt-10 p-5 rounded-lg hover:shadow-xl transition- shadow duration-200'>
      <Card review={reviews[index]} />

      <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-[45%]'>
        <button className='hover:text-violet-500' onClick={leftShiftHandler}>
          <FiChevronLeft />
        </button>
        <button className='hover:text-violet-500' onClick={rightShiftHandler}>
          <FiChevronRight />
        </button>
      </div>
      <div>
        <button className='bg-violet-400 mb-10 hover:bg-violet-500 transition-all duration-200 px-5 py-3 mt-5 rounded-md font-vold text-white text-lg' onClick={supriseHandler}>Suprise Me</button>
      </div>
    </div>
  )
}

export default Testimonials
