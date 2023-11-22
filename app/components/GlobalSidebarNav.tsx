'use client'

import { demos, type Item } from './Sidebarnavlist'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import clsx from 'clsx'
import { useState } from 'react'
import Image from 'next/image'

export function GlobalNav () {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <div className='fixed top-0 z-10 flex w-full flex-col border-b border-gray-100 bg-[#0F2B48] lg:bottom-0 lg:z-auto lg:w-[18%] lg:border-b-0 lg:border-r lg:border-gray-100'>
      <div className='flex h-14 items-center py-4 px-4 lg:h-auto'>
        <Link
          href='/'
          className='group flex w-full items-center gap-x-2.5'
          onClick={close}
        >
          {/* <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
           NextLogo
          </div> */}

          <h3 className='font-semibold tracking-wide bg-transparent text-gray-900 group-hover:text-gray-500'>
            <Image
              src='/assets/Happie.png'
              alt=''
              width={100}
              height={100}
              priority
            />
          </h3>
        </Link>
      </div>
      <button
        type='button'
        className='group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='block w-6 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='block w-6 text-white'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 9h16.5m-16.5 6.75h16.5'
            />
          </svg>
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-[#0F2B48] text-white':
            isOpen,
          hidden: !isOpen
        })}
      >
        <nav className='space-y-6 px-2 py-5'>
          {demos.map(section => {
            return (
              <div key={section.name}>
                <div className='space-y-1'>
                  {section.items.map(item => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            )
          })}
        </nav>
        {/* <Byline className="absolute hidden sm:block" /> */}
      </div>
    </div>
  )
}

function GlobalNavItem ({
  item,
  close
}: {
  item: Item
  close: () => false | void
}) {
  const segment = useSelectedLayoutSegment()
  const isActive = item.slug === segment

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md  px-3 py-4 text-sm font-medium hover:text-gray-300 lg:mx-2',
        {
          'text-white text-base font-Aeonik font-medium hover:text-white hover:bg-[#36C6EB]':
            !isActive,
          'hover:text-blue-800 text-white bg-[#54c4e0] hover:bg-[#54c4e0]':
            isActive
        }
      )}
      style={{ display: 'flex', alignItems: 'center' }} // Add this style
    >
      <Image
        src={item.icon}
        alt={item.slug}
        width={16}
        height={22}
        className='mr-4 text-white'
      />
      <p className='font-medium font-Aeonik text-base text-[12px]'>
        {' '}
        {item.name}
      </p>
    </Link>
  )
}
