import ServiceArticle from './ServiceArticle'
import ServiceCard from './ServiceCard'

import box from '@/public/assets/Box3D.png'
import trustVector from '@/public/assets/trust-vector.png'
import location from '@/public/assets/Location3d.png'

const Services = () => {
  return (
    <div
      className='px-[30px] sm:px-[45px] md:px-[60px] lg:px-[120px] py-11 md:py-20'
      id='services'
    >
      <div className='w-full flex flex-col'>
        <ServiceArticle
          title={'Improved Logistics Service.'}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend quam at tincidunt aliquet. Vestibulum condimentum in eros ut ullamcorper. Integer et faucibus magna.'
          }
          image={box}
        />
        <ServiceArticle
          title={'Reliable and secured customer service.'}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend quam at tincidunt aliquet. Vestibulum condimentum in eros ut ullamcorper. Integer et faucibus magna. '
          }
          image={trustVector}
          reverse
        />
        <ServiceArticle
          title={'Hitch Free Process.'}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend quam at tincidunt aliquet. Vestibulum condimentum in '
          }
          image={location}
        />
      </div>
      <div>
        <h3 className='text-2xl text-center block text-black font-bold mb-11 font-magra'>
          Our Services
        </h3>
        <div className='flex flex-col md:flex-row flex-wrap items-center md:justify-between justify-center gap-12'>
          <ServiceCard
            title={'Local & interstate Deliveries'}
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend quam at tincidunt '
            }
          />
          <ServiceCard
            title={'Export'}
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend quam at tincidunt '
            }
          />
          <ServiceCard
            title={'Fulfilment'}
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend quam at tincidunt '
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Services
