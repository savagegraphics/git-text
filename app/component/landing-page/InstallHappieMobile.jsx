'use client'

import Image from 'next/image'

import Phone from '@/public/assets/phone.png'
import appStoreButton from '@/public/assets/appStoreButton.webp'
import googlePlayButton from '@/public/assets/googlePlayButton.webp'

const InstallHappieMobile = () => {
  return (
    <div className='px-[30px] sm:px-[45px] md:px-[60px] lg:px-[120px] flex flex-col md:flex-row bg-lightblue pt-11 justify-between'>
      <div className=''>
        <h2 className='md:pt-11 md:text-left md:text-4xl text-center text-2xl text-blue mb-4 font-bold font-magra'>
          The Happie Mobile App Is Here
        </h2>
        <p className='md:text-lg text-md md:text-left text-center text-blue leading-loose w-full md:w-5/6'>
          The Happie mobile app is now available on Google Playstore and App
          Store. Download the Mobile App now.
        </p>
        <div className='flex flex-col gap-4 items-center justify-center md:items-stretch md:justify-start pb-8 md:pb-11 mt-7'>
          <button className='w-[135px]' onClick={() => {}}>
            <Image
              src={appStoreButton}
              alt='app-store-button'
              className='w-full'
            />
          </button>
          <button className='w-[135px]' onClick={() => {}}>
            <Image
              src={googlePlayButton}
              alt='google-play-button'
              className='w-full'
            />
          </button>
        </div>
      </div>
      <div className='flex justify-center md:justify-end'>
        <Image
          src={Phone}
          alt='mobile-app-image'
          className='max-w-full'
          placeholder='blur'
        />
      </div>
    </div>
  )
}

export default InstallHappieMobile
