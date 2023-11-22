import React from 'react'
import Cards from './Cards'
import SingleCard from './SingleCard'
import Cardtwo from './Cardtwo'

type Props = {}

const Grid = (props: Props) => {
  return (
    <div className='lg:flex lg:-mx-6 lg:my-6'>
      <div className='lg:w-4/6 lg:px-6'>
        <Cards />
      </div>

      <div className='mt-8 lg:w-2/6 lg:mt-0 lg:mr-4'>
        <SingleCard />
      </div>
    </div>
  )
}

export default Grid
