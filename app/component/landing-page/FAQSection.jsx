'use client'

import { useState } from 'react';

// FAQSection component
function FAQSection({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="px-[30px] sm:px-[45px] md:px-[60px] lg:px-[120px] py-16 md:py-24" id='faqs'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h2 className='font-bold text-3xl md:text-5xl font-magra'>FAQs</h2>
        <p className='mt-4 md:mt-7 text-md md:text-lg leading-relaxed w-full md:w-4/5'>We have carefully prepared a list of the most frequent inquiries for you. This will give you more insights on what Happie is about.</p>
      </div>
      <ul className="mt-12 md:mt-18 flex flex-col gap-12 md:gap-18">
        {faqs.map((faq, index) => (
          <li key={index} className={`w-full p-7 rounded-2xl shadow-md border-1 border-gray-200`}>
            <div className="flex items-center justify-between w-full text-md md:text-lg font-magra font-bold" onClick={() => toggleFAQ(index)}>
              <span className=''>{faq.question}</span>
              <span className="">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="w-full h-[0.8px] bg-black mt-5 transition"></div>}
            {activeIndex === index && <p className="pt-5 text-sm md:text-md leading-loose transition">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FAQSection;