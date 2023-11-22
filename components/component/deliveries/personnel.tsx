/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/JsMHACaPQFk
 */
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table'
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu'

export default function personnel () {
  return (
    <main className='flex flex-col min-h-screen p-4 md:p-6 bg-gray-50 dark:bg-gray-800'>
      <h1 className='text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100'>
        Manage Delivery Personnel
      </h1>
      <div className='flex flex-col md:flex-row items-center gap-4 mb-4'>
        <Input
          className='flex-grow bg-white dark:bg-gray-700 shadow-none appearance-none pl-8 mb-2 md:mb-0'
          placeholder='Search personnel...'
          type='search'
        />
        <Button className='ml-auto md:ml-0 bg-black text-white'>
          Add New Personnel
        </Button>
      </div>
      <div className='overflow-x-auto'>
        <div className='border shadow-sm rounded-lg min-w-full bg-white p-2'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Profile</TableHead>
                <TableHead>Personnel ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Current Assignment</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <img
                    alt='Profile'
                    className='rounded-full'
                    height='50'
                    src='/placeholder.svg'
                    style={{
                      aspectRatio: '50/50',
                      objectFit: 'cover'
                    }}
                    width='50'
                  />
                </TableCell>
                <TableCell>P#001</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Route #003</TableCell>
                <TableCell>Available</TableCell>
                <TableCell className='text-right'>
                  <Button size='icon' variant='ghost'>
                    <IconEdit className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size='icon' variant='ghost'>
                        <IconMorehorizontal className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>Change Availability</DropdownMenuItem>
                      <DropdownMenuItem>Assign New Route</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <hr />
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>
                  <img
                    alt='Profile'
                    className='rounded-full'
                    height='50'
                    src='/placeholder.svg'
                    style={{
                      aspectRatio: '50/50',
                      objectFit: 'cover'
                    }}
                    width='50'
                  />
                </TableCell>
                <TableCell>P#001</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Route #003</TableCell>
                <TableCell>Available</TableCell>
                <TableCell className='text-right'>
                  <Button size='icon' variant='ghost'>
                    <IconEdit className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size='icon' variant='ghost'>
                        <IconMorehorizontal className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>Change Availability</DropdownMenuItem>
                      <DropdownMenuItem>Assign New Route</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <hr />
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>
                  <img
                    alt='Profile'
                    className='rounded-full'
                    height='50'
                    src='/placeholder.svg'
                    style={{
                      aspectRatio: '50/50',
                      objectFit: 'cover'
                    }}
                    width='50'
                  />
                </TableCell>
                <TableCell>P#001</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Route #003</TableCell>
                <TableCell>Available</TableCell>
                <TableCell className='text-right'>
                  <Button size='icon' variant='ghost'>
                    <IconEdit className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size='icon' variant='ghost'>
                        <IconMorehorizontal className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>Change Availability</DropdownMenuItem>
                      <DropdownMenuItem>Assign New Route</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <hr />
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>
                  <img
                    alt='Profile'
                    className='rounded-full'
                    height='50'
                    src='/placeholder.svg'
                    style={{
                      aspectRatio: '50/50',
                      objectFit: 'cover'
                    }}
                    width='50'
                  />
                </TableCell>
                <TableCell>P#001</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Route #003</TableCell>
                <TableCell>Available</TableCell>
                <TableCell className='text-right'>
                  <Button size='icon' variant='ghost'>
                    <IconEdit className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size='icon' variant='ghost'>
                        <IconMorehorizontal className='w-4 h-4 text-gray-800 dark:text-gray-200' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>Change Availability</DropdownMenuItem>
                      <DropdownMenuItem>Assign New Route</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}

function IconEdit (prop: any) {
  return (
    <svg
      {...prop}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path d='M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5' />
      <polyline points='14 2 14 8 20 8' />
      <path d='M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z' />
    </svg>
  )
}

function IconMorehorizontal (prop: any) {
  return (
    <svg
      {...prop}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <circle cx='12' cy='12' r='1' />
      <circle cx='19' cy='12' r='1' />
      <circle cx='5' cy='12' r='1' />
    </svg>
  )
}
