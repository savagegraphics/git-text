'use client'
import Link from 'next/link'
import NavLinks from '@/app/ui/dashboard/nav-links'
import AcmeLogo from '@/app/ui/acme-logo'
import { PowerIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function SideNav () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <div className='flex justify-between'>
        <div className=''>
          <Link
            className='mb-2 flex h-20 w-64 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40'
            href='/'
          >
            <div className='w-32 text-white md:w-40'>
              <AcmeLogo />
            </div>
          </Link>
        </div>
        <div className='lg:hidden'>
          <button
            type='button'
            className='px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800'
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className='flex grow flex-col justify-between space-y-2'>
        <div className='hidden md:block flex-grow flex-col justify-between space-y-2'>
          <NavLinks />
        </div>
        <div
          className={`flex grow flex-col justify-between space-y-2 ${
            isSidebarOpen ? 'block' : 'hidden'
          }`}
        >
          <NavLinks />
        </div>
      </div>
    </div>
  )
}
