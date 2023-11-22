import React from 'react'

const GetQuote = () => {
  return (
    <div className='px-[30px] sm:px-[45px] md:px-[60px] lg:px-[120px] py-16 md:py-24' id='get-quote'>
      <div className='flex flex-col gap-4 items-center justify-center text-center'>
        <h2 className='font-bold text-3xl md:text-5xl font-magra text-center'>Get a quote</h2>
        <p className='text-md md:text-lg text-center w-5/6'>
          Obtain immediate delivery quotes for your shipments
          with just one click.
        </p>
      </div>
      <div className='w-full rounded-3xl bg-black/[0.8] text-white p-12 mt-11'>
        <form >
          <label htmlFor=""></label>
          <button type='submit' className=''>Get Quote</button>
        </form>
      </div>
    </div>
  )
}

export default GetQuote