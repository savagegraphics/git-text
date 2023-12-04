'use client'

import { Table } from 'flowbite-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu'

export default function Component () {
  return (
    <div className='overflow-x-auto m-8'>
      <h1 className='text-2xl font-semibold mb-4'>Manage Deliveries</h1>
      <Table striped>
        <Table.Head>
          <Table.HeadCell className='whitespace-nowrap'>
            Delivery Address
          </Table.HeadCell>
          <Table.HeadCell>Recipient</Table.HeadCell>
          <Table.HeadCell className='whitespace-nowrap'>
            Delivery Date
          </Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
          <Table.HeadCell>
            <span className='sr-only'>Status</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell className='whitespace-nowrap'>
              1234 Main St. Anytown, USA
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap  font-medium text-gray-900 dark:text-white'>
              {' '}
              John Doe
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap'>2023-11-25</Table.Cell>
            <Table.Cell className='whitespace-nowrap'>Delivered</Table.Cell>
            <Table.Cell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost'>
                    Edit
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem>Mark as Delivered</DropdownMenuItem>
                  <DropdownMenuItem>Mark as In Transit</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Table.Cell>
          </Table.Row>
          <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell className='whitespace-nowrap'>
              1234 Main St. Anytown, USA
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap  font-medium text-gray-900 dark:text-white'>
              {' '}
              John Doe
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap'>2023-11-25</Table.Cell>
            <Table.Cell className='whitespace-nowrap'> In Transit</Table.Cell>
            <Table.Cell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost'>
                    Edit
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem>Mark as Delivered</DropdownMenuItem>
                  <DropdownMenuItem>Mark as In Transit</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Table.Cell>
          </Table.Row>
          <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell className='whitespace-nowrap'>
              1234 Main St. Anytown, USA
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap  font-medium text-gray-900 dark:text-white'>
              {' '}
              John Doe
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap'>2023-11-25</Table.Cell>
            <Table.Cell className='whitespace-nowrap'> In Transit</Table.Cell>
            <Table.Cell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost'>
                    Edit
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem>Mark as Delivered</DropdownMenuItem>
                  <DropdownMenuItem>Mark as In Transit</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Table.Cell>
          </Table.Row>
          <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell className='whitespace-nowrap'>
              1234 Main St. Anytown, USA
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap  font-medium text-gray-900 dark:text-white'>
              {' '}
              John Doe
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap'>2023-11-25</Table.Cell>
            <Table.Cell className='whitespace-nowrap'>Delivered</Table.Cell>
            <Table.Cell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost'>
                    Edit
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem>Mark as Delivered</DropdownMenuItem>
                  <DropdownMenuItem>Mark as In Transit</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Table.Cell>
          </Table.Row>
          <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell className='whitespace-nowrap'>
              1234 Main St. Anytown, USA
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap  font-medium text-gray-900 dark:text-white'>
              {' '}
              John Doe
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap'>2023-11-25</Table.Cell>
            <Table.Cell className='whitespace-nowrap'>Delivered</Table.Cell>
            <Table.Cell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost'>
                    Edit
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem>Mark as Delivered</DropdownMenuItem>
                  <DropdownMenuItem>Mark as In Transit</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
