'use client'

import { Table } from 'flowbite-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu'

export default function Route () {
  return (
    <div className='overflow-x-auto m-8'>
      <h1 className='text-2xl md:text-3xl font-semibold mb-4'>
        Manage Delivery Routes
      </h1>
      <Table striped>
        <Table.Head>
          <Table.HeadCell className='whitespace-nowrap'>
            Start Point
          </Table.HeadCell>
          <Table.HeadCell className='whitespace-nowrap'>
            End Point
          </Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell className='whitespace-nowrap'>
            Estimated Travel Time
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell className='whitespace-nowrap'>
              1234 Main St. Anytown, USA
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap  font-medium text-gray-900 dark:text-white'>
              {' '}
              7890 Elm St. Somewhere, USA
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap'>In Transit</Table.Cell>
            <Table.Cell>
              2h 30m
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost'>
                    ..
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
              7890 Elm St. Somewhere, USA
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap'>In Transit</Table.Cell>
            <Table.Cell>
              2h 30m
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost'>
                    ..
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
              7890 Elm St. Somewhere, USA
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap'>In Transit</Table.Cell>
            <Table.Cell>
              2h 30m
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost'>
                    ..
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
              7890 Elm St. Somewhere, USA
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap'>In Transit</Table.Cell>
            <Table.Cell>
              2h 30m
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost'>
                    ..
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
              7890 Elm St. Somewhere, USA
            </Table.Cell>
            <Table.Cell className='whitespace-nowrap'>In Transit</Table.Cell>
            <Table.Cell>
              2h 30m
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='ghost'>
                    ..
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
