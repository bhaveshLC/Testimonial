import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
      
      <div className='absolute top-[-7rem] z-[10] mx-auto mt-10'>
        <img src={review.image} className=' w-[140px] h-[140px] rounded-full z-[25]'/>
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-10]'></div>
      </div>

      <div className='text-center mt-7'>
        <p className='text-2xl font-bold capitalize'>{review.name}</p>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>

      <div className='text-violet-300 mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>
      <div className='text-center mt-4 text-gray-500'>
        <p>{review.text}</p>
      </div>
      <div className='text-violet-300 mx-auto'>
        <FaQuoteRight/>
      </div>

    </div>
  )
}

export default Card
