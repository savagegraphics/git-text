import React from 'react'
import Link from 'next/link'
import Shippings from './Shippings'
import Delivery from './Delivery'
import Header from './Header'

type Props = {}

const History = (props: Props) => {
  return (
    <div className=''>
      <div className='hidden md:block'>
        <Header />
      </div>
      <div className='lg:m-12 m-6'>
        <Shippings />
        <Delivery />
      </div>
    </div>
  )
}

export default History
