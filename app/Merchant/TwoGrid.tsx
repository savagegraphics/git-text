import React from 'react'

type Props = {}

const TwoGrid = (props: Props) => {
  return (
    <div className='flex flex-col w-full lg:flex-row mt-6'>
      <div className='grid flex-grow lg:mr-2 mb-4 h-[150px] lg:w-[260px] w-full rounded-lg bg-gray-600'>
        <h1 className='p-3 text-lg'>
          Tracking
          <hr className='border-[#3A3A3A]' />
        </h1>
        <div className='tabs is-centered'>
          <ul>
            <li className='is-active'>
              <a>
                <span className='icon is-small'>
                  <i className='fas fa-image' aria-hidden='true'></i>
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className='icon is-small'>
                  <i className='fas fa-music' aria-hidden='true'></i>
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className='icon is-small'>
                  <i className='fas fa-film' aria-hidden='true'></i>
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className='icon is-small'>
                  <i className='far fa-file-alt' aria-hidden='true'></i>
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='grid flex-grow lg:ml-2 mb-4 h-[150px] lg:w-[160px] w-full rounded-lg bg-gray-400'>
        content
      </div>
    </div>
  )
}

export default TwoGrid
