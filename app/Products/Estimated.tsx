import React from 'react'

type Props = {}

const Estimated = (props: Props) => {
  return (
    <div className='bg-white rounded-2xl'>
      <div className='flex flex-col col-span-12 p-6 rounded lg:col-span-6 lg:p-4'>
        <div className='flex mb-4 justify-between flex-row md:mb-4'>
          <div className='text-gray-900 group'>
            <span className='items-start justify-start font-semibold'>
              Estimated Overview
            </span>
          </div>
        </div>
        <div className=''>
          <div className='mx-4 mt-6 mb-24'>
            <div className='text-[#366CB1] text-sm'>Recipient Order</div>
            <div className='text-black text-xs font-medium font-Aeonik'>
              Date/Time
            </div>
            <p className='text-black text-xs font-medium font-Aeonik'>
              12 January 2023 <span> 5:55 AM</span>
            </p>
          </div>
          <div className='mx-4 my-24'>
            <div className='text-[#366CB1] text-sm'>Order Pickup</div>
            <div className='text-black text-xs font-medium font-Aeonik'>
              Date/Time
            </div>
            <p className='text-black text-xs font-medium font-Aeonik'>
              12 January 2023 <span> 5:55 AM</span>
            </p>
          </div>
          <div className='mx-4 my-24'>
            <div className='text-[#366CB1] text-sm'>Order Route</div>
            <div className='text-black text-xs font-medium font-Aeonik'>
              Date/Time
            </div>
            <p className='text-black text-xs font-medium font-Aeonik'>
              12 January 2023 <span> 5:55 AM</span>
            </p>
          </div>
          <div className='mx-4 my-24'>
            <div className='text-gray-400 text-sm'>Order Destination</div>
            <div className='text-black text-xs font-medium font-Aeonik'>
              Date/Time
            </div>
            <p className='text-black text-xs font-medium font-Aeonik'>
              12 January 2023 <span> 5:55 AM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Estimated
