'use client;'
import React from 'react'
// import { AddressBar } from './'
import { GlobalNav } from '../components/GlobalSidebarNav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Happie Web',
  description: 'Happie Fufilments '
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className=''>
      <body className='bg-[#ECF1F6] overflow-y-scroll'>
        <GlobalNav />

        <div className='lg:pl-[18%]'>
          <div className='mx-auto'>
            <div className='bg-white'>{/* <AddressBar /> */}</div>
            <div className=' shadow-lg shadow-black/20'>
              <div className='lg:mt-0 md:mt-0 mt-10'>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
