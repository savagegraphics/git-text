/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/oh3Zru9p3Qf
 */
import { Button } from '@/components/ui/button'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table'

export default function fulfiling () {
  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-zinc-900'>
      <header className='flex items-center justify-between px-8 py-4 border-b border-zinc-200 dark:border-zinc-800'>
        <h1 className='text-2xl font-bold text-zinc-900 dark:text-zinc-50'>
          Happie&apos;s Fulfillment Center
        </h1>
        <Button variant='secondary'>Sign out</Button>
      </header>
      <main className='flex flex-col p-8 space-y-4'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <Card>
            <CardHeader>
              <CardTitle>Track Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get real-time updates on the status of your orders.</p>
              <Button className='mt-2'>Track Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Manage Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Keep track of your stock levels and replenish inventory as
                needed.
              </p>
              <Button className='mt-2'>Manage Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pricing Models</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Explore our transparent pricing models for various business
                needs.
              </p>
              <Button className='mt-2'>View Pricing</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Delivery Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Integrate with our cost-effective and reliable delivery
                partners.
              </p>
              <Button className='mt-2'>View Partners</Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className='text-xl font-bold text-zinc-900 dark:text-zinc-50'>
            Recent Orders
          </h2>
          <Table className='mt-4'>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Delivery Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#12345</TableCell>
                <TableCell>Shipped</TableCell>
                <TableCell>3</TableCell>
                <TableCell>Nov 30, 2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#67890</TableCell>
                <TableCell>Processing</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Dec 01, 2023</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
      <footer className='flex items-center justify-center py-4 bg-zinc-100 dark:bg-zinc-800'>
        <p className='text-center text-zinc-500 dark:text-zinc-400'>
          © 2023 Happie&apos;s Fulfillment Center
        </p>
      </footer>
    </div>
  )
}
