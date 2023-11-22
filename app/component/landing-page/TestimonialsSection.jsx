'use client'

import { useState, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleLeft,
  faChevronCircleRight
} from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-elastics-carousel'
import { testimonials } from '@/utils/constants'
import TestimonialCard from './TestimonialCard'

// TestimonialsSection component
function TestimonialsSection ({ testimonials }) {
  const carouselRef = useRef(null)

  function myArrow ({ type, onClick, isEdge }) {
    return <span></span>
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 650, itemsToShow: 2, itemsToScroll: 1, pagination: false }
  ]
  return (
    <div className='px-[30px] sm:px-[45px] md:px-[60px] lg:px-[120px] py-16 md:py-24 bg-blue/[.03] '>
      <div className='flex items-center justify-between w-full mb-14'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold font-magra'>
          User Reviews
        </h2>
        <div className='flex gap-3'>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            onClick={() => carouselRef.current.slidePrev()}
            className='text-3xl md:text-4xl text-gray-200 hover:text-blue/[.5] focus:hover:text-blue/[.5] transition cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            onClick={() => carouselRef.current.slideNext()}
            className='text-3xl md:text-4xl text-gray-200 hover:text-blue/[.5] focus:text-blue/[.5] transition cursor-pointer'
          />
        </div>
      </div>
      <Carousel
        renderArrow={myArrow}
        ref={carouselRef}
        breakPoints={breakPoints}
        itemPadding={[5, 12]}
      >
        {testimonials.map(testimonial => (
          <TestimonialCard testimonial={testimonial} />
        ))}
      </Carousel>
    </div>
  )
}

export default TestimonialsSection
