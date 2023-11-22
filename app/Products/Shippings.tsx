import React from 'react'

type Props = {}

const Shippings = (props: Props) => {
  return (
    <div>
      <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <div className='group rounded-lg cursor-pointer border border-[#FFFFFF] bg-gray-50 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 lg:mr-4 lg:mx-0 mx-4 my-4'>
          {' '}
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none rounded-lg p-4 border border-[#366CB1]'>
              <img src='./svg/Shipment/Frame.svg' alt='' />
            </span>
          </h2>
          <div className='mt-4'>
            <p className={`m-0 max-w-[30ch] text-[10px] opacity-50`}>
              Total Order
            </p>
            <div className='flex justify-between'>
              <p
                className={`m-0 max-w-[30ch] text-[10px] text-black font-bold`}
              >
                550
              </p>
              <p
                className={`inline-flex m-0 max-w-[30ch] whitespace-nowrap opacity-50 text-[#078C03] text-[10px] font-bold font-Aeonik`}
              >
                +20%
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_1074_185)'>
                    <path
                      d='M11.1486 5.05701C11.1113 5.09435 11.071 5.13455 11.0337 5.17189C8.828 7.3776 6.61942 9.58618 4.41371 11.7919C4.37351 11.8321 4.33919 11.8724 4.29596 11.9096C4.09995 12.0755 3.80242 12.0594 3.61546 11.8725C3.42851 11.6855 3.40655 11.3878 3.57241 11.1918C3.6096 11.1486 3.64995 11.1143 3.69016 11.0741C5.89587 8.86837 8.10445 6.65979 10.3102 4.45408C10.3532 4.411 10.3934 4.37079 10.4365 4.32771C10.4362 4.31594 10.4301 4.30402 10.4298 4.29225C10.3621 4.29354 10.2916 4.29771 10.224 4.299C8.62664 4.30423 7.02627 4.30644 5.43178 4.30879C5.35237 4.3098 5.27584 4.30793 5.1993 4.30607C4.91355 4.29028 4.69658 4.07906 4.68697 3.80522C4.67736 3.53139 4.8751 3.31556 5.16042 3.31368C5.71039 3.30648 6.26065 3.31106 6.81077 3.30975C8.21398 3.30568 9.62912 3.30778 11.0354 3.30673C11.7355 3.30613 12.1786 3.74351 12.1779 4.43779C12.1751 6.37648 12.1753 8.31818 12.1784 10.257C12.1774 10.457 12.1286 10.6265 11.9576 10.7312C11.7923 10.8301 11.6158 10.8317 11.4397 10.7303C11.2666 10.6261 11.1833 10.4681 11.1814 10.271C11.1799 9.72373 11.1782 9.1706 11.1795 8.62048C11.1807 7.46138 11.179 6.30514 11.1802 5.14604C11.1796 5.12249 11.1907 5.09334 11.196 5.06993C11.1812 5.06663 11.1634 5.06031 11.1486 5.05701Z'
                      fill='#078C03'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1074_185'>
                      <rect
                        width='11.6772'
                        height='10.2176'
                        fill='white'
                        transform='translate(15.4819 7.2251) rotate(135)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className='group rounded-lg cursor-pointer border border-[#FFFFFF] bg-gray-50 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 mx-2 my-4'>
          {' '}
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none rounded-lg p-4 border border-[#366CB1]'>
              <img src='./svg/Shipment/Group.svg' alt='' />
            </span>
          </h2>
          <div className='mt-4'>
            <p className={`m-0 max-w-[30ch] text-[10px] opacity-50`}>
              Delivered
            </p>
            <div className='flex justify-between'>
              <p
                className={`m-0 max-w-[30ch] text-[10px] text-black font-bold`}
              >
                400
              </p>
              <p
                className={`inline-flex m-0 max-w-[30ch] whitespace-nowrap opacity-50 text-[#078C03] text-[10px] font-bold font-Aeonik`}
              >
                +15%
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_1074_185)'>
                    <path
                      d='M11.1486 5.05701C11.1113 5.09435 11.071 5.13455 11.0337 5.17189C8.828 7.3776 6.61942 9.58618 4.41371 11.7919C4.37351 11.8321 4.33919 11.8724 4.29596 11.9096C4.09995 12.0755 3.80242 12.0594 3.61546 11.8725C3.42851 11.6855 3.40655 11.3878 3.57241 11.1918C3.6096 11.1486 3.64995 11.1143 3.69016 11.0741C5.89587 8.86837 8.10445 6.65979 10.3102 4.45408C10.3532 4.411 10.3934 4.37079 10.4365 4.32771C10.4362 4.31594 10.4301 4.30402 10.4298 4.29225C10.3621 4.29354 10.2916 4.29771 10.224 4.299C8.62664 4.30423 7.02627 4.30644 5.43178 4.30879C5.35237 4.3098 5.27584 4.30793 5.1993 4.30607C4.91355 4.29028 4.69658 4.07906 4.68697 3.80522C4.67736 3.53139 4.8751 3.31556 5.16042 3.31368C5.71039 3.30648 6.26065 3.31106 6.81077 3.30975C8.21398 3.30568 9.62912 3.30778 11.0354 3.30673C11.7355 3.30613 12.1786 3.74351 12.1779 4.43779C12.1751 6.37648 12.1753 8.31818 12.1784 10.257C12.1774 10.457 12.1286 10.6265 11.9576 10.7312C11.7923 10.8301 11.6158 10.8317 11.4397 10.7303C11.2666 10.6261 11.1833 10.4681 11.1814 10.271C11.1799 9.72373 11.1782 9.1706 11.1795 8.62048C11.1807 7.46138 11.179 6.30514 11.1802 5.14604C11.1796 5.12249 11.1907 5.09334 11.196 5.06993C11.1812 5.06663 11.1634 5.06031 11.1486 5.05701Z'
                      fill='#078C03'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1074_185'>
                      <rect
                        width='11.6772'
                        height='10.2176'
                        fill='white'
                        transform='translate(15.4819 7.2251) rotate(135)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className='group rounded-lg cursor-pointer border border-[#FFFFFF] bg-gray-50 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 mx-2 my-4'>
          {' '}
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none rounded-lg p-4 border border-[#366CB1]'>
              <img src='./svg/Shipment/Group (1).svg' alt='' />
            </span>
          </h2>
          <div className='mt-4'>
            <p className={`m-0 max-w-[30ch] text-[10px] opacity-50`}>Pending</p>
            <div className='flex justify-between'>
              <p
                className={`m-0 max-w-[30ch] text-[10px] text-black font-bold`}
              >
                100
              </p>
              <p
                className={`inline-flex m-0 max-w-[30ch] whitespace-nowrap opacity-50 text-[#078C03] text-[10px] font-bold font-Aeonik`}
              >
                +5%
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_1074_185)'>
                    <path
                      d='M11.1486 5.05701C11.1113 5.09435 11.071 5.13455 11.0337 5.17189C8.828 7.3776 6.61942 9.58618 4.41371 11.7919C4.37351 11.8321 4.33919 11.8724 4.29596 11.9096C4.09995 12.0755 3.80242 12.0594 3.61546 11.8725C3.42851 11.6855 3.40655 11.3878 3.57241 11.1918C3.6096 11.1486 3.64995 11.1143 3.69016 11.0741C5.89587 8.86837 8.10445 6.65979 10.3102 4.45408C10.3532 4.411 10.3934 4.37079 10.4365 4.32771C10.4362 4.31594 10.4301 4.30402 10.4298 4.29225C10.3621 4.29354 10.2916 4.29771 10.224 4.299C8.62664 4.30423 7.02627 4.30644 5.43178 4.30879C5.35237 4.3098 5.27584 4.30793 5.1993 4.30607C4.91355 4.29028 4.69658 4.07906 4.68697 3.80522C4.67736 3.53139 4.8751 3.31556 5.16042 3.31368C5.71039 3.30648 6.26065 3.31106 6.81077 3.30975C8.21398 3.30568 9.62912 3.30778 11.0354 3.30673C11.7355 3.30613 12.1786 3.74351 12.1779 4.43779C12.1751 6.37648 12.1753 8.31818 12.1784 10.257C12.1774 10.457 12.1286 10.6265 11.9576 10.7312C11.7923 10.8301 11.6158 10.8317 11.4397 10.7303C11.2666 10.6261 11.1833 10.4681 11.1814 10.271C11.1799 9.72373 11.1782 9.1706 11.1795 8.62048C11.1807 7.46138 11.179 6.30514 11.1802 5.14604C11.1796 5.12249 11.1907 5.09334 11.196 5.06993C11.1812 5.06663 11.1634 5.06031 11.1486 5.05701Z'
                      fill='#078C03'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1074_185'>
                      <rect
                        width='11.6772'
                        height='10.2176'
                        fill='white'
                        transform='translate(15.4819 7.2251) rotate(135)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </div>
          </div>
        </div>

        <div className='group rounded-lg cursor-pointer border border-[#FFFFFF] bg-gray-50 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 lg:ml-4 lg:mx-0 mx-4 my-4'>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none rounded-lg p-4 border border-[#366CB1]'>
              <img src='./svg/Shipment/Group (2).svg' alt='' />
            </span>
          </h2>
          <div className='mt-4'>
            <p className={`m-0 max-w-[30ch] text-[10px] opacity-50`}>
              Cancelled
            </p>
            <div className='flex justify-between'>
              <p
                className={`m-0 max-w-[30ch] text-[10px] text-black font-bold`}
              >
                50
              </p>
              <p
                className={`inline-flex m-0 max-w-[30ch] whitespace-nowrap opacity-50 text-[#E92929] text-[10px] font-bold font-Aeonik`}
              >
                -7%
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_1074_191)'>
                    <path
                      d='M4.33335 10.4249C4.37068 10.3876 4.41089 10.3474 4.44823 10.31C6.65393 8.10433 8.86251 5.89576 11.0682 3.69005C11.1084 3.64984 11.1427 3.60949 11.186 3.5723C11.382 3.40644 11.6795 3.42251 11.8665 3.60946C12.0534 3.79642 12.0754 4.09409 11.9095 4.29011C11.8723 4.33333 11.832 4.36765 11.7918 4.40786C9.58606 6.61357 7.37749 8.82214 5.17178 11.0279C5.1287 11.0709 5.08849 11.1111 5.04541 11.1542C5.0457 11.166 5.05187 11.1779 5.05216 11.1897C5.11979 11.1884 5.1903 11.1842 5.25793 11.1829C6.85529 11.1777 8.45566 11.1755 10.0502 11.1731C10.1296 11.1721 10.2061 11.174 10.2826 11.1759C10.5684 11.1916 10.7854 11.4029 10.795 11.6767C10.8046 11.9505 10.6068 12.1664 10.3215 12.1683C9.77154 12.1755 9.22128 12.1709 8.67117 12.1722C7.26795 12.1763 5.85282 12.1742 4.44658 12.1752C3.74641 12.1758 3.30329 11.7384 3.30403 11.0441C3.30683 9.10546 3.30661 7.16376 3.30351 5.22493C3.30453 5.0249 3.35336 4.85545 3.52438 4.75077C3.68966 4.65182 3.86614 4.65024 4.04219 4.75161C4.21536 4.85585 4.29864 5.01381 4.3005 5.21096C4.30206 5.75821 4.30376 6.31134 4.30245 6.86145C4.30126 8.02056 4.30295 9.17679 4.30176 10.3359C4.30233 10.3594 4.29127 10.3886 4.28596 10.412C4.30075 10.4153 4.31856 10.4216 4.33335 10.4249Z'
                      fill='#EA2A2A'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1074_191'>
                      <rect
                        width='11.6772'
                        height='10.2176'
                        fill='white'
                        transform='translate(0 8.25684) rotate(-45)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shippings
