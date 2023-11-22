'use client'

import { Button, Timeline } from 'flowbite-react'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function DefaultTimeline () {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title className='text-sm text-gray-600'>
            <div className='flex justify-between'>
              <div className='text-semibold'> Relaxer Cream 2x</div>
              <div className=''> Sept 22</div>
            </div>
          </Timeline.Title>
          <Timeline.Body>
            <p className='text-xs '>Has arrivd at Oshawale gateway</p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title className='text-sm text-gray-600'>
            <div className='flex justify-between'>
              <div className='text-semibold'> Tumeric scrub</div>
              <div className=''> Sept 23</div>
            </div>
          </Timeline.Title>
          <Timeline.Body>
            <p className='text-xs '>Has arrivd at Lekki gateway</p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title className='text-sm text-gray-600'>
            <div className='flex justify-between'>
              <div className='text-semibold'> Playstation 5 </div>
              <div className=''> Sept 24</div>
            </div>
          </Timeline.Title>
          <Timeline.Body>
            <p className='text-xs '>Has arrivd at Forte Oil gateway</p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  )
}
