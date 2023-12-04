import React from 'react'

type Props = {}

const Delivery = (props: Props) => {
  return (
    <section className='container p-8 mx-auto bg-white rounded-3xl'>
      <div className='m-4 text-xl font-medium font-Aeonik'>
        Ongoing Shipment
      </div>
      <div className='p-4 mb-2 sm:flex sm:items-center sm:justify-between bg-[#eaeced] rounded-2xl'>
        <div className='flex'>
          <div className='mr-2'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.029 2.5401C11.326 2.37514 11.6602 2.28857 12 2.28857C12.3398 2.28857 12.674 2.37514 12.971 2.5401L20.486 6.7141C20.6418 6.80074 20.7716 6.92746 20.862 7.08113C20.9524 7.23479 21 7.40983 21 7.5881V15.8231C20.9999 16.1797 20.9045 16.5299 20.7235 16.8372C20.5426 17.1446 20.2828 17.3979 19.971 17.5711L12.971 21.4611C12.674 21.6261 12.3398 21.7126 12 21.7126C11.6602 21.7126 11.326 21.6261 11.029 21.4611L4.029 17.5711C3.71736 17.398 3.45763 17.1448 3.27671 16.8377C3.0958 16.5305 3.00026 16.1806 3 15.8241V7.5881C2.99999 7.40983 3.04764 7.23479 3.13802 7.08113C3.22839 6.92746 3.3582 6.80074 3.514 6.7141L11.03 2.5401H11.029Z'
                stroke='#366CB1'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M7.5 4.5L16.5 9.5V13M6 12.328L9 14'
                stroke='#366CB1'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M3 7L12 12M12 12L21 7M12 12V21.5'
                stroke='#366CB1'
                stroke-width='2'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <div className=''>
            <div className='flex items-center gap-x-3'>
              <h2 className='font-Aeonik font-medium text-neutral-700 text-base'>
                Parcel ID [NNAJKWA26]
              </h2>
            </div>

            <p className='mt-1 text-xs text-neutral-700 font-medium font-Aeonik'>
              Product: Camera
            </p>
            <p className='mt-1 text-xs text-neutral-700 font-medium font-Aeonik'>
              Weight: 8kg
            </p>
            <p className='mt-1 text-[#366CB1] text-xs font-medium font-Aeonik pt-4'>
              Order Details
            </p>
          </div>
        </div>

        <div>
          <div className='m-4'>
            <p className='mt-1 text-xs text-[#7e7b7b] font-medium font-Aeonik'>
              Departure Date
            </p>
            <div className='flex items-center gap-x-3'>
              <h2 className='text-neutral-700 font-normal text-[12px] font-Aeonik'>
                12 January 2023 {''}
                <span> 5:55 AM</span>
              </h2>
            </div>
          </div>

          <div className='m-4'>
            <p className='mt-1 text-xs text-[#7e7b7b] font-medium font-Aeonik'>
              Arrival Date
            </p>
            <div className='flex items-center gap-x-3'>
              <h2 className='text-neutral-700 font-normal text-[12px] font-Aeonik'>
                14 January 2023 {''}
                <span> 5:55 AM</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 mb-2 sm:flex sm:items-center sm:justify-between bg-gray-50 rounded-2xl'>
        <div className='flex'>
          <div className='mr-2'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.029 2.5401C11.326 2.37514 11.6602 2.28857 12 2.28857C12.3398 2.28857 12.674 2.37514 12.971 2.5401L20.486 6.7141C20.6418 6.80074 20.7716 6.92746 20.862 7.08113C20.9524 7.23479 21 7.40983 21 7.5881V15.8231C20.9999 16.1797 20.9045 16.5299 20.7235 16.8372C20.5426 17.1446 20.2828 17.3979 19.971 17.5711L12.971 21.4611C12.674 21.6261 12.3398 21.7126 12 21.7126C11.6602 21.7126 11.326 21.6261 11.029 21.4611L4.029 17.5711C3.71736 17.398 3.45763 17.1448 3.27671 16.8377C3.0958 16.5305 3.00026 16.1806 3 15.8241V7.5881C2.99999 7.40983 3.04764 7.23479 3.13802 7.08113C3.22839 6.92746 3.3582 6.80074 3.514 6.7141L11.03 2.5401H11.029Z'
                stroke='#366CB1'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M7.5 4.5L16.5 9.5V13M6 12.328L9 14'
                stroke='#366CB1'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M3 7L12 12M12 12L21 7M12 12V21.5'
                stroke='#366CB1'
                stroke-width='2'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <div className=''>
            <div className='flex items-center gap-x-3'>
              <h2 className='font-Aeonik font-medium text-neutral-700 text-base'>
                Parcel ID [NNAJKWA26]
              </h2>
            </div>

            <p className='mt-1 text-xs text-neutral-700 font-medium font-Aeonik'>
              Product: Camera
            </p>
            <p className='mt-1 text-xs text-neutral-700 font-medium font-Aeonik'>
              Weight: 8kg
            </p>
            <p className='mt-1 text-[#366CB1] text-xs font-medium font-Aeonik pt-4'>
              Order Details
            </p>
          </div>
        </div>

        <div>
          <div className='m-4'>
            <p className='mt-1 text-xs text-[#7e7b7b] font-medium font-Aeonik'>
              Departure Date
            </p>
            <div className='flex items-center gap-x-3'>
              <h2 className='text-neutral-700 font-normal text-[12px] font-Aeonik'>
                12 January 2023 {''}
                <span> 5:55 AM</span>
              </h2>
            </div>
          </div>

          <div className='m-4'>
            <p className='mt-1 text-xs text-[#7e7b7b] font-medium font-Aeonik'>
              Arrival Date
            </p>
            <div className='flex items-center gap-x-3'>
              <h2 className='text-neutral-700 font-normal text-[12px] font-Aeonik'>
                14 January 2023 {''}
                <span> 5:55 AM</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 mb-2 sm:flex sm:items-center sm:justify-between bg-[#fcfeff] rounded-2xl'>
        <div className='flex'>
          <div className='mr-2'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.029 2.5401C11.326 2.37514 11.6602 2.28857 12 2.28857C12.3398 2.28857 12.674 2.37514 12.971 2.5401L20.486 6.7141C20.6418 6.80074 20.7716 6.92746 20.862 7.08113C20.9524 7.23479 21 7.40983 21 7.5881V15.8231C20.9999 16.1797 20.9045 16.5299 20.7235 16.8372C20.5426 17.1446 20.2828 17.3979 19.971 17.5711L12.971 21.4611C12.674 21.6261 12.3398 21.7126 12 21.7126C11.6602 21.7126 11.326 21.6261 11.029 21.4611L4.029 17.5711C3.71736 17.398 3.45763 17.1448 3.27671 16.8377C3.0958 16.5305 3.00026 16.1806 3 15.8241V7.5881C2.99999 7.40983 3.04764 7.23479 3.13802 7.08113C3.22839 6.92746 3.3582 6.80074 3.514 6.7141L11.03 2.5401H11.029Z'
                stroke='#366CB1'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M7.5 4.5L16.5 9.5V13M6 12.328L9 14'
                stroke='#366CB1'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M3 7L12 12M12 12L21 7M12 12V21.5'
                stroke='#366CB1'
                stroke-width='2'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <div className=''>
            <div className='flex items-center gap-x-3'>
              <h2 className='font-Aeonik font-medium text-neutral-700 text-base'>
                Parcel ID [NNAJKWA26]
              </h2>
            </div>

            <p className='mt-1 text-xs text-neutral-700 font-medium font-Aeonik'>
              Product: Camera
            </p>
            <p className='mt-1 text-xs text-neutral-700 font-medium font-Aeonik'>
              Weight: 8kg
            </p>
            <p className='mt-1 text-[#366CB1] text-xs font-medium font-Aeonik pt-4'>
              Order Details
            </p>
          </div>
        </div>

        <div>
          <div className='m-4'>
            <p className='mt-1 text-xs text-[#7e7b7b] font-medium font-Aeonik'>
              Departure Date
            </p>
            <div className='flex items-center gap-x-3'>
              <h2 className='text-neutral-700 font-normal text-[12px] font-Aeonik'>
                12 January 2023 {''}
                <span> 5:55 AM</span>
              </h2>
            </div>
          </div>

          <div className='m-4'>
            <p className='mt-1 text-xs text-[#7e7b7b] font-medium font-Aeonik'>
              Arrival Date
            </p>
            <div className='flex items-center gap-x-3'>
              <h2 className='text-neutral-700 font-normal text-[12px] font-Aeonik'>
                14 January 2023 {''}
                <span> 5:55 AM</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery
