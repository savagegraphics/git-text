'use client'

import { Dropdown, Navbar } from 'flowbite-react'
import { Avatar } from 'flowbite-react'

export default function NavbarWithDropdown () {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href=''>
        <span className='self-center whitespace-nowrap text-xl font-semibold'>
          <h1 className='font-bold text-[#366CB1] text-2xl'> Dashboard </h1>
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <div className='mx-4 my-2'>
          <h1 className='text-black font-semibold text-lg font-[Open Sans]'>
            David Alfred
          </h1>
          <p className='text-neutral-400 text-[12px] font-normal font-[Open Sans]'>
            davidalfred@gmail.com
          </p>
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt='User settings'
              img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className='block text-sm'> David Alfred</span>
            <span className='block truncate text-sm font-medium'>
              davidalfred@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      <form className='w-[24rem]'>
        <label
          htmlFor='default-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Track Parcel, Shipments...'
            required
          />
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Search
          </button>
        </div>
      </form>
    </Navbar>
  )
}
