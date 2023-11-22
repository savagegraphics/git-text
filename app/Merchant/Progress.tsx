import React from 'react'
import '@/components/Flowbitey.css'

type Props = {}

const Progress = (props: Props) => {
  return (
    <section className='mx-2 my-6 lg:w-[389px] lg:h-[150px] w-[329px] h-[150px]  rounded-lg bg-white'>
      <div className='pt-6'>
        <div className='tracking'>
          <div className='title'>Tracking </div>
          <hr className='mx-8' />
        </div>
        <div className='progress-track'>
          <ul id='progressbar'>
            <li className='step0 active ' id='step1'>
              Recepient
              <br />
              Order
            </li>
            <li className='step0 active text-center' id='step2'>
              Order
              <br />
              Pickup
            </li>
            <li className='step0 active text-right' id='step3'>
              Order
              <br />
              Route
            </li>
            <li className='step0 text-right' id='step4'>
              Order
              <br />
              Destination
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Progress
