import Image from 'next/image';

const ServiceArticle = ({ title, content, image, reverse }) => {
  return (
    <div className={`w-full flex flex-col ${!reverse ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12 md:gap-16 py-7 md:py-11`}>
      <div className='max-w-[400px] w-full'>
        <h2 className='font-bold md:text-2xl text-xl text-black mb-4 font-magra'>{title}</h2>
        <p className='md:text-md text-sm text-gray-80 leading-loose'>{content}</p>
      </div>
      <div className='max-w-[400px] w-full'>
        <Image
          src={image}
          alt={title}
          className='w-full'
          placeholder='blur'
        />
      </div>
    </div>
  )
}
export default ServiceArticle
