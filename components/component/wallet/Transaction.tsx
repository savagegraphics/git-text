'use client'
import React from 'react'
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

type Props = {}

const Transaction = (props: Props) => {
  return (
    <div>
      <div className='flex flex-col'>
        <header className='flex h-20 md:h-[60px] items-center gap-4 border-b bg-zinc-100/40 px-6 dark:bg-zinc-800/40'>
          <Link className='md:' href='#'>
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
              <path d='M21 12V7H5a2 2 0 0 1 0-4h14v4' />
              <path d='M3 5v14a2 2 0 0 0 2 2h16v-5' />
              <path d='M18 12a2 2 0 0 0 0 4h4v-4Z' />
            </svg>
            <span className='sr-only'>Home</span>
          </Link>
          <div className='w-full flex-1'>
            <h1 className='font-semibold text-lg md:text-xl'>
              Wallet Balance: $5000.00
            </h1>
          </div>
          <div className='ml-auto'>
            <Button className='bg-[#0F2B48] text-white'>Add Funds</Button>
            <Button className='ml-2' variant='outline'>
              Withdraw Funds
            </Button>
          </div>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
          <div className='flex items-center gap-4'>
            <h1 className='font-semibold text-lg md:text-xl'>
              Transaction History
            </h1>
          </div>
          <div className='border shadow-sm bg-white p-2 rounded-lg overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[80px] md:w-auto'>Date</TableHead>
                  <TableHead className=' md:table-cell max-w-[150px]'>
                    Transaction Type
                  </TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className=' md:table-cell'>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>01/01/2023</TableCell>
                  <TableCell className=' md:table-cell'>Add Funds</TableCell>
                  <TableCell>$500.00</TableCell>
                  <TableCell className=' md:table-cell'>Completed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/02/2023</TableCell>
                  <TableCell className=' md:table-cell'>
                    Withdraw Funds
                  </TableCell>
                  <TableCell>$300.00</TableCell>
                  <TableCell className=' md:table-cell'>Completed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/02/2023</TableCell>
                  <TableCell className=' md:table-cell'>
                    Withdraw Funds
                  </TableCell>
                  <TableCell>$300.00</TableCell>
                  <TableCell className=' md:table-cell'>Completed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/02/2023</TableCell>
                  <TableCell className=' md:table-cell'>
                    Withdraw Funds
                  </TableCell>
                  <TableCell>$300.00</TableCell>
                  <TableCell className=' md:table-cell'>Completed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/03/2023</TableCell>
                  <TableCell className=' md:table-cell'>Add Funds</TableCell>
                  <TableCell>$700.00</TableCell>
                  <TableCell className=' md:table-cell'>Completed</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Transaction
