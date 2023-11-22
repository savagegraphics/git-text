// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/ZwcqUpPCdmi
//  */
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import {
//   DropdownMenuTrigger,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuItem,
//   DropdownMenuContent,
//   DropdownMenu
// } from '@/components/ui/dropdown-menu'
// import {
//   CardTitle,
//   CardHeader,
//   CardContent,
//   CardFooter,
//   Card
// } from '@/components/ui/card'
// import {
//   SelectValue,
//   SelectTrigger,
//   SelectItem,
//   SelectGroup,
//   SelectContent,
//   Select
// } from '@/components/ui/select'
// import { Input } from '@/components/ui/input'

// export default function Component () {
//   return (
//     <div className='flex h-screen overflow-hidden'>
//       <div className='hidden lg:flex lg:flex-col lg:w-64 lg:border-r lg:border-zinc-200 dark:border-zinc-800'>
//         <div className='flex-shrink-0 flex items-center justify-center h-16 bg-white px-4 dark:bg-zinc-900'>
//           <span className='text-2xl font-semibold'>Logistics Dashboard</span>
//         </div>
//         <nav className='flex-1 flex flex-col overflow-y-auto divide-y divide-zinc-200 dark:divide-zinc-700'>
//           <Link
//             className='group flex items-center px-3 py-2 text-sm leading-5 font-medium text-zinc-900 dark:text-zinc-100'
//             href='#'
//           >
//             <IconHome className='h-6 w-6 text-zinc-500 dark:text-zinc-400' />
//             <span className='truncate ml-3'>Dashboard</span>
//           </Link>
//           <Link
//             className='group flex items-center px-3 py-2 text-sm leading-5 font-medium text-zinc-700 dark:text-zinc-400'
//             href='#'
//           >
//             <IconPackage className='h-6 w-6 text-zinc-500 dark:text-zinc-400' />
//             <span className='truncate ml-3'>All Deliveries</span>
//           </Link>
//           <Link
//             className='group flex items-center px-3 py-2 text-sm leading-5 font-medium text-zinc-700 dark:text-zinc-400'
//             href='#'
//           >
//             <IconPluscircle className='h-6 w-6 text-zinc-500 dark:text-zinc-400' />
//             <span className='truncate ml-3'>Add New Delivery</span>
//           </Link>
//           <Link
//             className='group flex items-center px-3 py-2 text-sm leading-5 font-medium text-zinc-700 dark:text-zinc-400'
//             href='#'
//           >
//             <IconFilter className='h-6 w-6 text-zinc-500 dark:text-zinc-400' />
//             <span className='truncate ml-3'>Delivery Filters</span>
//           </Link>
//         </nav>
//       </div>
//       <div className='flex-1 flex flex-col overflow-hidden'>
//         <header className='flex-shrink-0 flex items-center justify-between h-16 bg-white px-4 border-b border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800'>
//           <h2 className='text-lg font-medium'>Manage Deliveries</h2>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button className='rounded-full' size='icon' variant='ghost'>
//                 <img
//                   alt='User profile'
//                   height='32'
//                   src='/placeholder.svg'
//                   style={{
//                     aspectRatio: '32/32',
//                     objectFit: 'cover'
//                   }}
//                   width='32'
//                 />
//                 <span className='sr-only'>Toggle user menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align='end'>
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Profile</DropdownMenuItem>
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </header>
//         <main className='flex-1 overflow-y-auto p-4'>
//           <div className='flex flex-col gap-6'>
//             <div className='flex flex-col gap-2 md:grid md:grid-cols-4 md:gap-6'>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Delivery Details</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className='grid gap-4'>
//                     <div>
//                       Status: <span className='font-medium'>In Transit</span>
//                     </div>
//                     <div>
//                       Recipient: <span className='font-medium'>John Doe</span>
//                     </div>
//                     <div>
//                       Delivery Address:{' '}
//                       <span className='font-medium'>
//                         123 Main St, Anytown, USA
//                       </span>
//                     </div>
//                     <div>
//                       Delivery Date:{' '}
//                       <span className='font-medium'>Nov 22, 2023</span>
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <Button variant='outline'>Edit Delivery</Button>
//                 </CardFooter>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Update Status</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder='Select Status' />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectGroup>
//                         <SelectItem value='delivered'>Delivered</SelectItem>
//                         <SelectItem value='inTransit'>In Transit</SelectItem>
//                         <SelectItem value='delayed'>Delayed</SelectItem>
//                       </SelectGroup>
//                     </SelectContent>
//                   </Select>
//                 </CardContent>
//                 <CardFooter>
//                   <Button>Update Status</Button>
//                 </CardFooter>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Delivery Filters</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <Input placeholder='Search Deliveries...' type='search' />
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Map View</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <img
//                     alt='Map View'
//                     height='200'
//                     src='/placeholder.svg'
//                     style={{
//                       aspectRatio: '400/200',
//                       objectFit: 'cover'
//                     }}
//                     width='400'
//                   />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

// function IconFilter (props) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       stroke-width='2'
//       stroke-linecap='round'
//       stroke-linejoin='round'
//     >
//       <polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' />
//     </svg>
//   )
// }

// function IconHome (props) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       stroke-width='2'
//       stroke-linecap='round'
//       stroke-linejoin='round'
//     >
//       <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
//       <polyline points='9 22 9 12 15 12 15 22' />
//     </svg>
//   )
// }

// function IconPackage (props) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       stroke-width='2'
//       stroke-linecap='round'
//       stroke-linejoin='round'
//     >
//       <path d='m7.5 4.27 9 5.15' />
//       <path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
//       <path d='m3.3 7 8.7 5 8.7-5' />
//       <path d='M12 22V12' />
//     </svg>
//   )
// }

// function IconPluscircle (props) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       stroke-width='2'
//       stroke-linecap='round'
//       stroke-linejoin='round'
//     >
//       <circle cx='12' cy='12' r='10' />
//       <path d='M8 12h8' />
//       <path d='M12 8v8' />
//     </svg>
//   )
// }
