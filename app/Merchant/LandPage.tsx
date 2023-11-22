import React from 'react'

type Props = {}

const LandPage = (props: Props) => {
  return (
    <div className='flex flex-col w-full lg:flex-row mt-6'>
      <div className='grid flex-grow lg:mr-4 mb-4 h-[128px] lg:w-[357px] w-full rounded-2xl bg-[#0F2B48]'>
        <div className='m-4'>
          <div className='flex justify-between'>
            <div className=''>
              <h1 className='text-white ml-2 mt-2 text-xl font-bold font-Inter'>
                Good Evening, David
              </h1>
              <p className='text-white text-base ml-2 mt-2 mb-4 text-opacity-50 font-thin font-Inter'>
                Welcome back!
              </p>
            </div>
            <div className=' text-white mr-4 font-semibold'>
              {' '}
              <button
                type='submit'
                className='ml-4 mt-4 w-36 h-12 text-white bg-[#36C6EB] hover:bg-[#36C6EB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-Inter rounded-lg text-sm px-4 py-2'
              >
                Start Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='grid flex-grow lg:ml-4 mb-4 h-[128px] lg:w-[140px] w-full rounded-lg bg-[#0F2B48]'>
        <div className='m-4'>
          <div className='flex justify-between'>
            <img src='/svg/Shipment/finbag.svg' alt='' />
            <div className=' text-white mr-4 font-semibold'>
              {' '}
              <button
                type='submit'
                className='w-32 h-10 text-[#0F2B48] bg-white hover:bg-[#36C6EB] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal font-Inter rounded-lg text-sm px-4 py-2'
              >
                Fund Wallet
              </button>
            </div>
          </div>
          <h1 className='text-white ml-2 mt-2 text-3xl font-bold font-Inter'>
            N18,240
          </h1>
          <p className='text-white text-xs ml-2 mb-2 text-opacity-50 font-thin font-Inter'>
            Main Account
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandPage
