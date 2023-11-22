import React from 'react'

type Props = {}

const SingleCard = (props: Props) => {
  return (
    <div className='rounded-2xl bg-white lg:w-full lg:h-[20rem] w-full h-[20rem] border border-gray-200'>
      <dt className='flex justify-between m-4 text-3xl font-semibold leading-9 text-gray-900'>
        <div className='text-sky-950 text-base font-bold font-Inter mt-2'>
          Notifications
        </div>
        <div className=''>
          <button
            type='button'
            className='py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#0F2B48] text-white hover:bg-[#284b70] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 font-Inter'
          >
            See all
          </button>
        </div>
      </dt>
      <hr />
      <div className='flex'>
        <div className='m-4'>
          <svg
            width='38'
            height='37'
            viewBox='0 0 38 37'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.75004 6.16675C3.91019 6.16675 3.10473 6.4916 2.51087 7.06984C1.917 7.64807 1.58337 8.43233 1.58337 9.25008V26.2084H4.75004C4.75004 27.435 5.25049 28.6114 6.14128 29.4788C7.03208 30.3461 8.24026 30.8334 9.50004 30.8334C10.7598 30.8334 11.968 30.3461 12.8588 29.4788C13.7496 28.6114 14.25 27.435 14.25 26.2084H23.75C23.75 27.435 24.2505 28.6114 25.1413 29.4788C26.0321 30.3461 27.2403 30.8334 28.5 30.8334C29.7598 30.8334 30.968 30.3461 31.8588 29.4788C32.7496 28.6114 33.25 27.435 33.25 26.2084H36.4167V18.5001L31.6667 12.3334H26.9167V6.16675M15.8334 9.25008L22.1667 15.4167L15.8334 21.5834V16.9584H6.33337V13.8751H15.8334M26.9167 14.6459H30.875L33.9942 18.5001H26.9167M9.50004 23.8959C10.1299 23.8959 10.734 24.1396 11.1794 24.5732C11.6248 25.0069 11.875 25.5951 11.875 26.2084C11.875 26.8217 11.6248 27.4099 11.1794 27.8436C10.734 28.2773 10.1299 28.5209 9.50004 28.5209C8.87015 28.5209 8.26606 28.2773 7.82066 27.8436C7.37526 27.4099 7.12504 26.8217 7.12504 26.2084C7.12504 25.5951 7.37526 25.0069 7.82066 24.5732C8.26606 24.1396 8.87015 23.8959 9.50004 23.8959ZM28.5 23.8959C29.1299 23.8959 29.734 24.1396 30.1794 24.5732C30.6248 25.0069 30.875 25.5951 30.875 26.2084C30.875 26.8217 30.6248 27.4099 30.1794 27.8436C29.734 28.2773 29.1299 28.5209 28.5 28.5209C27.8701 28.5209 27.2661 28.2773 26.8207 27.8436C26.3753 27.4099 26.125 26.8217 26.125 26.2084C26.125 25.5951 26.3753 25.0069 26.8207 24.5732C27.2661 24.1396 27.8701 23.8959 28.5 23.8959Z'
              fill='#0F2B48'
            />
          </svg>
        </div>
        <div className='m-2'>
          <h2 className='text-neutral-600 mt-2 text-sm font-bold font-Inter'>
            Arrived Package
          </h2>
          <p className='text-[12px] mt-1 text-neutral-600 text-opacity-50 font-semibold font-Inter'>
            Percel 234334 has been deliverd
          </p>
          <p className='text-[10px] mt-1 text-neutral-600 text-opacity-50 font-semibold font-Inter'>
            2 minutes ago
          </p>
        </div>
      </div>
      <hr />
      <div className='flex'>
        <div className='m-4'>
          <svg
            width='38'
            height='37'
            viewBox='0 0 38 37'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.75004 6.16675C3.91019 6.16675 3.10473 6.4916 2.51087 7.06984C1.917 7.64807 1.58337 8.43233 1.58337 9.25008V26.2084H4.75004C4.75004 27.435 5.25049 28.6114 6.14128 29.4788C7.03208 30.3461 8.24026 30.8334 9.50004 30.8334C10.7598 30.8334 11.968 30.3461 12.8588 29.4788C13.7496 28.6114 14.25 27.435 14.25 26.2084H23.75C23.75 27.435 24.2505 28.6114 25.1413 29.4788C26.0321 30.3461 27.2403 30.8334 28.5 30.8334C29.7598 30.8334 30.968 30.3461 31.8588 29.4788C32.7496 28.6114 33.25 27.435 33.25 26.2084H36.4167V18.5001L31.6667 12.3334H26.9167V6.16675M15.8334 9.25008L22.1667 15.4167L15.8334 21.5834V16.9584H6.33337V13.8751H15.8334M26.9167 14.6459H30.875L33.9942 18.5001H26.9167M9.50004 23.8959C10.1299 23.8959 10.734 24.1396 11.1794 24.5732C11.6248 25.0069 11.875 25.5951 11.875 26.2084C11.875 26.8217 11.6248 27.4099 11.1794 27.8436C10.734 28.2773 10.1299 28.5209 9.50004 28.5209C8.87015 28.5209 8.26606 28.2773 7.82066 27.8436C7.37526 27.4099 7.12504 26.8217 7.12504 26.2084C7.12504 25.5951 7.37526 25.0069 7.82066 24.5732C8.26606 24.1396 8.87015 23.8959 9.50004 23.8959ZM28.5 23.8959C29.1299 23.8959 29.734 24.1396 30.1794 24.5732C30.6248 25.0069 30.875 25.5951 30.875 26.2084C30.875 26.8217 30.6248 27.4099 30.1794 27.8436C29.734 28.2773 29.1299 28.5209 28.5 28.5209C27.8701 28.5209 27.2661 28.2773 26.8207 27.8436C26.3753 27.4099 26.125 26.8217 26.125 26.2084C26.125 25.5951 26.3753 25.0069 26.8207 24.5732C27.2661 24.1396 27.8701 23.8959 28.5 23.8959Z'
              fill='#0F2B48'
            />
          </svg>
        </div>
        <div className='m-2'>
          <h2 className='text-neutral-600 mt-2 text-sm font-bold font-Inter'>
            Order confirmation
          </h2>
          <p className='text-[12px] mt-1 text-neutral-600 text-opacity-50 font-semibold font-Inter'>
            Kayode wants to send you an item
          </p>
          <div className='flex space-x-4 my-3'>
            <div className=''>
              <button
                type='button'
                className='py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 hover:bg-gray-400 text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 font-Inter'
              >
                Decline
              </button>
            </div>
            <div className=''>
              <button
                type='button'
                className='py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#0F2B48] text-white hover:bg-[#284b70] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 font-Inter'
              >
                Accept
              </button>
            </div>
          </div>
          <p className='text-[10px] mt-1 text-neutral-600 text-opacity-50 font-semibold font-Inter'>
            2 minutes ago
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
