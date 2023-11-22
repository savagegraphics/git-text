import Image from 'next/image'
import brandLogoFooter from '@/public/assets/brand-logo-footer.svg'

import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className='px-[30px] sm:px-[45px] md:px-[60px] lg:px-[120px] flex items-start gap-16 justify-between flex-wrap bg-[#0F2B48] w-full py-11 md:py-22 text-white'>
      <div className='w-28 sm:w-32 md:w-36'>
        <Image
          src={brandLogoFooter}
          alt='brand-logo-footer'
          className='w-full'
        />
      </div>
      <div className=''>
        <p className='text-sm md:text-md text-white font-bold'>Company</p>
        <ul className='mt-6 flex flex-col gap-5 text-sm md:text-md font-extralight'>
          <li className=''>
            <a href=''>Whatsapp</a>
          </li>
          <li className=''>
            <a href=''>Fufilment centers</a>
          </li>
        </ul>
      </div>
      <div className=''>
        <p className='text-sm md:text-md text-white font-bold'>Resources</p>
        <ul className='mt-6 flex flex-col gap-5 text-sm md:text-md font-extralight'>
          <li className=''>
            <a href=''>Terms of Use</a>
          </li>
          <li className=''>
            <a href=''>Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className=''>
        <p className='text-sm md:text-md text-white font-bold'>Contact</p>
        <ul className='mt-6 flex flex-col gap-5 text-sm md:text-md font-extralight'>
          <li className=''>
            <a href=''>Info@Happie.com</a>
          </li>
          <div className='flex flex-row items-start'>
            <SocialIcon
              url='https://facebook.com/'
              fgColor='white'
              bgColor='transparent'
              style={{ width: '40px', height: '40px' }}
            />
            <SocialIcon
              url='https://instagram.com/'
              fgColor='white'
              bgColor='transparent'
              style={{ width: '40px', height: '40px' }}
            />
            <SocialIcon
              url='https://twitter.com/'
              fgColor='white'
              bgColor='transparent'
              style={{ width: '40px', height: '40px' }}
            />
          </div>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
