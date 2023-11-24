'use client;'
import React from 'react'
import Estimate from '@/components/component/estimate/estimated'
import Dashboard from './Dashboard'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='overflow-auto'>
      <Dashboard />
    </div>
  )
}

export default page
