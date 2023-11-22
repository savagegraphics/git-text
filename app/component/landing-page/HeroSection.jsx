import Image from 'next/image'
import Link from 'next/link'
import heroIllustration from '@/public/assets/hero-illustration.jpg'
import Nav from './Nav'

const HeroSection = () => {
  return (
    <div className='px-[30px] sm:px-[45px] md:px-[60px] lg:px-[120px] py-11 flex flex-col md:flex-row items-start lg:justify-between gap-16 min-h-[682px] md:h-screen max-h-[2440px]'>
      <div className='my-4 md:mt-24 md:w-2/4 text-center sm:text-left flex flex-col sm:items-start items-center'>
        <h1 className='text-gray-80 text-[26px] sm:text-4xl md:text-[32px] lg:text-[42px] leading-snug sm:leading-tight font-bold font-magra'>
          Get an effective shipping and fufillment services for your
          <span className='text-blue'> e-commerce</span> business.
        </h1>
        <p className='my-5 text-sm sm:text-md leading-loose sm:w-4/5 w-full'>
          Welcome to a Happie life! Use Happie to send items to your customers,
          friends, and family locally and internationally. Say goodbye to
          stressful shipping forever!
        </p>
        <div className='flex gap-3 flex-col sm:flex-row mt-7'>
          <Link
            className='rounded-xl bg-[#e4e7ea] py-3 px-8 text-[#0F2B48] text-sm sm:text-md'
            href='../Merchant'
          >
            Start Shipping
          </Link>
          <button className='rounded-xl border bg-[#0F2B48] py-3 px-8 text-white text-sm sm:text-md outline-none'>
            <a href='#get-quote'>Get A Quote</a>
          </button>
        </div>
      </div>
      <div className='w-full h-full md:max-h-[650px] md:w-2/4'>
        <Image
          src={heroIllustration}
          alt='Hero-illustration'
          className='w-full h-full'
          placeholder='blur'
        />
      </div>
    </div>
  )
}

export default HeroSection
