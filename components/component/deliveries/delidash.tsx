/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/iLz3wXDdUpw
 */
import Link from 'next/link'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

export default function delidash () {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <header className='flex items-center justify-between p-4 border-b md:flex-row sm:px-6 lg:px-8'>
        <nav className='hidden md:flex space-x-10'>
          <Link className='hover:underline' href='#'>
            Home
          </Link>
          <Link className='hover:underline' href='#'>
            Orders
          </Link>
          <Link className='hover:underline' href='#'>
            Inventory
          </Link>
          <Link className='hover:underline' href='#'>
            Customers
          </Link>
          <Link className='hover:underline' href='#'>
            Reports
          </Link>
          <Link className='hover:underline' href='#'>
            Settings
          </Link>
        </nav>
        <div className='flex justify-end items-end space-x-4'>
          <span>Jane Doe</span>
          <Link className='hover:underline' href='#'>
            Logout
          </Link>
        </div>
      </header>
      <div className='flex flex-1'>
        <main className='flex-1 overflow-auto p-4'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Delivery Address</TableHead>
                <TableHead>Order Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#12345</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>123 Main St, Anytown, USA</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>
                  <Button variant='link'>View Details</Button>
                  <Button variant='link'>Update Status</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#67890</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>456 Elm St, Anytown, USA</TableCell>
                <TableCell>In Transit</TableCell>
                <TableCell>
                  <Button variant='link'>View Details</Button>
                  <Button variant='link'>Update Status</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#11223</TableCell>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>789 Oak St, Anytown, USA</TableCell>
                <TableCell>Preparing for Delivery</TableCell>
                <TableCell>
                  <Button variant='link'>View Details</Button>
                  <Button variant='link'>Update Status</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className='mt-8'>
            <img
              alt='Delivery route map'
              className='w-full h-auto'
              height='400'
              src='/placeholder.svg'
              style={{
                aspectRatio: '800/400',
                objectFit: 'cover'
              }}
              width='800'
            />
          </div>
        </main>
      </div>
    </div>
  )
}
