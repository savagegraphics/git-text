'use client;'
import React from 'react'
import Estimate from '@/components/component/estimate/estimatee'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='overflow-auto'>
      <Estimate />
    </div>
  )
}

export default page