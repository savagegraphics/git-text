import React from 'react'

const TestimonialCard = ({testimonial : {text, author, title}}) => {
  return (
    <div className="testimonial-card bg-white shadow-lg rounded-2xl md:rounded-3xl p-5 md:p-8">
        <p className="text-sm md:text-md leading-loose">{text}</p>
        <p className="text-md md:text-lg font-bold mt-6">{author}</p>
        <p className="text-sm md:text-md">{title}</p>
    </div>
  )
}

export default TestimonialCard