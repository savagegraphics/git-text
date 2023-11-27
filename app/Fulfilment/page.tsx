import React from 'react'
import History from './History'

type Props = {}

const page = (props: Props) => {
  return <div className='h-[100vh] overflow-auto'>
    <History/>
  </div>
}

export default page
