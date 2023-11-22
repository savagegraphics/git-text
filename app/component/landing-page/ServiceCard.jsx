const ServiceCard = ({ title, content }) => {
  return (
    <div className='bg-transparent rounded-lg min-h-[130px] w-full max-w-[320px] shadow-md border border-black'>
      <h4 className='px-4 py-2 text-lg text-black font-bold font-magra'>{title}</h4>
      <div className='w-full h-[1px] bg-gray-300'></div>
      <p className='px-5 py-2 text-sm text-gray-80 leading-loose'>{content}</p>
    </div>
  )
}

export default ServiceCard
