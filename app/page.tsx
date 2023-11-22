'use client;'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

// Tell fontawesome
config.autoAddCss = false

import Nav from './component/landing-page/Nav'
import Footer from './component/landing-page/Footer'
import HeroSection from './component/landing-page/HeroSection'
import Services from './component/landing-page/Services'
import InstallHappieMobile from './component/landing-page/InstallHappieMobile'
import FAQSection from './component/landing-page/FAQSection'
import TestimonialsSection from './component/landing-page/TestimonialsSection'
import GetQuote from './component/landing-page/GetQuote'

import { faqs } from '@/utils/constants'
import { testimonials } from '@/utils/constants'

export default function Home () {
  return (
    <div className='text-black bg-white font-sniglet'>
      <Nav />
      <HeroSection />
      <Services />
      <GetQuote />
      <InstallHappieMobile />
      <FAQSection faqs={faqs} />
      <TestimonialsSection testimonials={testimonials} />
      <Footer />
    </div>
  )
}
