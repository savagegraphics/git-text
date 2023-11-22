import React from 'react'

type Shipment = {
  route: string
  destination: string
  price: number
}

const shipments: Shipment[] = [
  {
    route: 'Nigeria to US',
    destination: 'New York',
    price: 250
  },
  {
    route: 'Canada to Nigeria',
    destination: 'Abuja, FCT.',
    price: 300
  },
  {
    route: 'UK to Nigeria',
    destination: 'Lagos',
    price: 275
  },
  {
    route: 'UK to Australia',
    destination: 'Sydney',
    price: 350
  },
  {
    route: 'Nigeria to Canada',
    destination: 'Ontario, CA.',
    price: 290
  }
]

const totalQty = shipments.length
const totalPrice = shipments.reduce(
  (total, shipment) => total + shipment.price,
  0
)

type Props = {}

const Cards = (props: Props) => {
  return (
    <div className='relative overflow-x-auto rounded-2xl'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3 rounded-l-lg'>
              Route
            </th>
            <th scope='col' className='px-6 py-3'>
              Destination
            </th>
            <th scope='col' className='px-6 py-3 rounded-r-lg'>
              Price(kg)
            </th>
          </tr>
        </thead>
        <tbody className=' '>
          {shipments.map((shipment, index) => (
            <tr key={index} className='bg-white dark:bg-gray-800'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                {shipment.route}
              </th>
              <td className='px-6 py-4'>{shipment.destination}</td>
              <td className='px-6 py-4'>${shipment.price}</td>
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          <tr className='font-semibold text-gray-900 dark:text-white'>
            <th scope='row' className='px-6 py-3 text-base'>
              Total
            </th>
            <td className='px-6 py-3'>{totalQty}</td>
            <td className='px-6 py-3'>${totalPrice}</td>
          </tr>
        </tfoot> */}
      </table>
    </div>
  )
}

export default Cards
