import React from 'react'

type Props = {}

const FaqGrid = (props: Props) => {
  return (
<section className="">
	<div className="container flex flex-col items-center p-4 mx-auto md:p-8">
		<div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<div className="flex flex-col w-full divide-y divide-gray-700">
				<a rel="noopener noreferrer" href="#" className="items-center justify-center p-4 sm:py-8 lg:py-4">
                   <p className='text-gray-400 text-xs'>Product</p>
                   <p className='text-sm'>Camera</p>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="items-center justify-center p-4 sm:py-8 lg:py-4">
                   <p className='text-gray-400 text-xs'>Weight</p>
                   <p className='text-sm'>8kg</p>
                    </a>		
        	</div>
			<div className="flex flex-col w-full divide-y divide-gray-700">
            <a rel="noopener noreferrer" href="#" className="items-center justify-center p-4 sm:py-8 lg:py-4">
                   <p className='text-gray-400 text-xs'>From</p>
                   <p className='text-sm'>Lagos, Nigeria</p>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="items-center justify-center p-4 sm:py-8 lg:py-4">
                   <p className='text-gray-400 text-xs'>Price</p>
                   <p className='text-sm'>N80, 000</p>
                    </a>
    			</div>
			<div className="flex flex-col w-full divide-y sm:flex-col sm:flex divide-gray-700">
            <a rel="noopener noreferrer" href="#" className="lg:whitespace-nowrap items-center justify-center p-4 sm:py-8 lg:py-4">
                   <p className='text-gray-400 text-xs'>To</p>
                   <p className='text-sm'>Ontario, Canada</p>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="lg:whitespace-nowrap items-center justify-center p-4 sm:py-8 lg:py-4">
                   <p className='text-gray-400 text-xs'>Ordered Date</p>
                   <p className='text-sm'>12 January 2023</p>
                    </a>
			</div>
		</div>
	</div>
</section>
  )
}

export default FaqGrid


