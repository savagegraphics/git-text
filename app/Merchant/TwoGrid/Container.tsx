import React from 'react'
import LargeGrid from './LargeGrid'
import SemiGrid from './SemiGrid'

type Props = {}

const Container = (props: Props) => {
  return (
    <div className='lg:flex lg:-mx-6'>
      <div className='lg:w-4/6 lg:px-6'>
        <LargeGrid />
      </div>

      <div className='mt-8 lg:w-2/6 lg:mt-0 lg:mr-4'>
        <SemiGrid />
      </div>
    </div>
  )
}

export default Container
