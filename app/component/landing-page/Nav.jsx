'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import brandLogo from '@/public/assets/brand-logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='px-[30px] sm:px-[45px] md:px-[60px] lg:px-[120px] flex items-center justify-between py-3 md:py-4 font-sniglet'>
      <Link href='../Merchant' className='w-28 sm:w-32 md:w-36'>
        <Image src={brandLogo} alt='brand_logo' className='w-full' />
      </Link>
      <ul className='hidden sm:flex gap text-grey-80 gap-11 md:gap-24 sm:text-sm md:text-md'>
        <li className='text-blue '>
          <a href=''>Home</a>
        </li>
        <li className=''>
          <a href='#services'>Services</a>
        </li>
        <li className=''>
          <a href='#faqs'>FAQs</a>
        </li>
      </ul>
      <Link
        className='hidden sm:block rounded-lg text-white text-sm md:text-md bg-[#0F2B48] px-5 py-2 cursor-pointer'
        href='../Auth'
      >
        Get Started
      </Link>
      <div className='flex sm:hidden'>
        <FontAwesomeIcon
          icon={toggle ? faClose : faBars}
          onClick={() => setToggle(prev => !prev)}
          className={`cursor-pointer z-50 ${
            toggle ? 'fixed top-5 right-8' : ''
          }`}
        />
        <div
          className={`w-4/5 z-20 min-h-screen fixed flex flex-col px-11 top-0 bg-transparent backdrop-blur-2xl transition-[right] ease-in-out duration-300  ${
            toggle ? 'right-0' : '-right-full'
          } `}
        >
          <ul className='flex flex-col  text-grey-80 mt-16 gap-16 mb-16 text-md text-center'>
            <li className='text-blue '>
              <a href=''>Home</a>
            </li>
            <li className=''>
              <a href='#services'>Services</a>
            </li>
            <li className=''>
              <a href='#faqs'>FAQs</a>
            </li>
          </ul>
          <Link
            className='rounded-lg text-white text-sm md:text-md bg-[#0F2B48] hover:bg-[#0F2B48]  hover:border-white hover:border-1 px-4 py-2 cursor-pointer text-center'
            href='../Auth'
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
