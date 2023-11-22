import React from 'react'
import Timeline from './Timeline'

type Props = {}

const SemiGrid = (props: Props) => {
  return (
    <div className='rounded-2xl mt-4 bg-white lg:w-full w-full  border border-gray-200'>
      <img src='./assets/Rectangle.png' alt='' className='w-full' />
      <div className='text-[#0F2B48] font-bold text-xl mx-4 my-2'>
        Closest shipping
      </div>
      <div className='mx-4 my-4'>
        <Timeline />
      </div>
    </div>
  )
}

export default SemiGrid
