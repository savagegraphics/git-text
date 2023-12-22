import { Card } from '@/app/ui/dashboard/cards'
import { lusitana } from '@/app/ui/fonts'
// import {
//   fetchRevenue,
//   fetchLatestInvoices,
//   fetchCardData
// } from '@/app/lib/data'

export default function Page () {
  return (
    <main>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Card title=' Active Shipment' value={24} type='collected' />
        <Card title='Cancelled' value={0} type='pending' />
        <Card title='Completed' value={47} type='invoices' />
        <Card title='Get Estmate' value={16} type='customers' />
      </div>
    </main>
  )
}

// import React from 'react'

// type Props = {}

// const FourCards = (props: Props) => {
//   return (
//     <div className='grid grid-cols-1 gap-5 mt-5 md:grid-cols-4 mb-6'>
//       <div className='overflow-hidden bg-white rounded-lg shadow cursor-pointer'>
//         <div className='px-4 py-5 lg:p-6'>
//           <dl>
//             <dt className='flex justify-between mb-1 text-3xl font-semibold leading-9 text-gray-900'>
//               <p>23</p>
//               <img src='/svg/vector/Vector (1).svg' alt='' />
//             </dt>
//             <dd className='text-xs font-medium leading-5 text-gray-500 truncate'>
//               Active Shipment
//             </dd>
//           </dl>
//         </div>
//       </div>
//       <div className='overflow-hidden bg-white rounded-lg shadow cursor-pointer'>
//         <div className='px-4 py-5 lg:p-6'>
//           <dl>
//             <dt className='flex justify-between mb-1 text-3xl font-semibold leading-9 text-gray-900'>
//               <p>0</p>
//               <img src='/svg/vector/Vector (1).svg' alt='' />
//             </dt>
//             <dd className='text-xs font-medium leading-5 text-gray-500 truncate'>
//               Cancelled
//             </dd>
//           </dl>
//         </div>
//       </div>
//       <div className='overflow-hidden bg-white rounded-lg shadow cursor-pointer'>
//         <div className='px-4 py-5 lg:p-6'>
//           <dl>
//             <dt className='flex justify-between mb-1 text-3xl font-semibold leading-9 text-gray-900'>
//               <p>50</p>
//               <img src='/svg/vector/Vector (1).svg' alt='' />
//             </dt>
//             <dd className='text-xs font-medium leading-5 text-gray-500 truncate'>
//               Completed
//             </dd>
//           </dl>
//         </div>
//       </div>
//       <div className='overflow-hidden bg-white rounded-lg shadow cursor-pointer'>
//         <div className='px-4 py-5 lg:py-2 lg:px-4'>
//           <dl>
//             <dt className='flex justify-between mb-1 text-3xl font-semibold leading-9 text-gray-900'>
//               <img src='/svg/vector/mdi.svg' alt='' />
//               <img src='/svg/vector/Vector (2).svg' alt='' />
//             </dt>
//             <div className=''>
//               <dd className='text-xs font-medium leading-5 text-neutral-600 truncate'>
//                 Get Estimate
//               </dd>
//               <dd className='text-[8px] font-medium leading-5 text-gray-500 truncate'>
//                 Send or Recieve an item
//               </dd>
//             </div>
//           </dl>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FourCards
