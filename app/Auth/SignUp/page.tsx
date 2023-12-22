import React from 'react'
import Link from 'next/link'

type Props = {}

const signin = (props: Props) => {
  return (
    <div>
      <section className='bg-white dark:bg-gray-900'>
        <div className='flex justify-center min-h-screen'>
          <div className='flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5'>
            <div className='w-full'>
              <div className='flex justify-center mx-auto'>
                <img
                  className='w-auto h-7 sm:h-8'
                  src='assets/brand-logo.svg'
                  alt=''
                />
              </div>
              <div className='flex items-center justify-center'>
                <h1
                  className='text-3xl font-bold tracking-wider text-[#0F2B48] dark:text-white'
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Create an Account
                </h1>
              </div>
              <div className='flex items-center justify-center text-center mx-16'>
                <p className='mt-4 text-gray-500 dark:text-gray-400'>
                  Great to have you back! Kindly enter your credentials to acces
                  your account
                </p>
              </div>
              <div className='mt-6'>
                <h1 className='text-gray-500 dark:text-gray-300'>
                  Select type of account
                </h1>

                <div className='mt-3 md:flex md:items-center md:-mx-2'>
                  <button className='flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>

                    <span className='mx-2'>Individual</span>
                  </button>

                  <button className='flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>

                    <span className='mx-2'>Merchant</span>
                  </button>
                </div>
              </div>

              <form className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2'>
                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    First Name
                  </label>
                  <input
                    type='text'
                    placeholder='John'
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    Last name
                  </label>
                  <input
                    type='text'
                    placeholder='Snow'
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    Phone number
                  </label>
                  <input
                    type='text'
                    placeholder='XXX-XX-XXXX-XXX'
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    Email address
                  </label>
                  <input
                    type='email'
                    placeholder='johnsnow@example.com'
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    Password
                  </label>
                  <input
                    type='password'
                    placeholder='Enter your password'
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    Confirm password
                  </label>
                  <input
                    type='password'
                    placeholder='Enter your password'
                    className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>
              </form>
              <div className=''>
                <p className='p-8 text-[#535353] text-[13px]'>
                  By clicking sign up, I acknowledge that I have read,
                  understand and agree to the Happie&apos;s{' '}
                  <span className='text-[#38C9EC]'>Privacy Policy </span>and
                  <span className='text-[#38C9EC]'> Terms of Service </span>
                </p>
              </div>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <button className='flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                  <Link href='../Dashboard'>
                    {' '}
                    <span>Sign Up </span>
                  </Link>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 rtl:-scale-x-100'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </button>
              </div>
              <Link href='/Auth/Login'>
                <div className='text-sm flex items-center justify-center text-center'>
                  <p className='p-8 text-[#535353]'>
                    Already have an account?
                    <span className='text-[#0F2B48] font-bold cursor-pointer'>
                      {' '}
                      Sign In
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div
            className='hidden bg-cover lg:block lg:w-2/5'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')"
            }}
          ></div>
        </div>
      </section>
    </div>
  )
}

export default signin
