/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/bglikdYrZIi
 */
'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table'
import { useState } from 'react'
import Deliver from './deliva'
import Personnel from './personnel'
import Routes from './deliroutetwo'
import Reports from './reports'

export default function Wallet () {
  const [currentPage, setCurrentPage] = useState('deliva')

  const handleClick = (page: string) => {
    setCurrentPage(page)
  }

  return (
    <div className='grid h-screen min-h-screen w-full md:grid-cols-[280px_1fr]'>
      <div className='border-r bg-zinc-100/40 md:block dark:bg-zinc-800/40'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-[60px] items-center border-b px-6'>
            <Link className='flex items-center gap-2 font-semibold' href='#'>
              <svg
                className=' h-6 w-6'
                fill='none'
                height='24'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z' />
                <path d='m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9' />
                <path d='M12 3v6' />
              </svg>
              <h1 className='font-bold text-lg'>Delivery</h1>
            </Link>
          </div>
          <div className='flex-1 overflow-auto py-2'>
            <nav className='grid items-start px-4 text-sm font-medium'>
              <Link
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all ${
                  currentPage === 'deliva'
                    ? 'text-zinc-900 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                    : 'hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                }`}
                href='#'
                onClick={() => handleClick('deliva')}
              >
                Manage Deliveries
              </Link>
              <Link
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all ${
                  currentPage === 'routes'
                    ? 'text-zinc-900 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                    : 'hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                }`}
                href='#'
                onClick={() => handleClick('routes')}
              >
                Delivery Routes
              </Link>
              <Link
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all ${
                  currentPage === 'personnel'
                    ? 'text-zinc-900 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                    : 'hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                }`}
                href='#'
                onClick={() => handleClick('personnel')}
              >
                Delivery Personnel
              </Link>
              <Link
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all ${
                  currentPage === 'reports'
                    ? 'text-zinc-900 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                    : 'hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                }`}
                href='#'
                onClick={() => handleClick('reports')}
              >
                Reports
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className='flex-1 overflow-auto py-2'>
        {currentPage === 'deliva' && <Deliver />}
        {currentPage === 'routes' && <Routes />}
        {currentPage === 'personnel' && <Personnel />}
        {currentPage === 'reports' && <Reports />}
      </div>
    </div>
  )
}
