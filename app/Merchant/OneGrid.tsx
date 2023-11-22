import React from 'react'

type Props = {}

const OneGrid = (props: Props) => {
  return (
    <div className="bg-white rounded-2xl">
	<div className="flex flex-col col-span-12 p-6 rounded lg:col-span-6 lg:p-4">
    <div className="flex mb-4 justify-between flex-row md:mb-4">
        <div className=" text-gray-900 group">
	    <span className="items-start justify-start">Notification</span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </div>

        <span className="items-right justify-right text-xs font-thin">See all</span>

      </div>
        	<div className="pt-6 pb-4 space-y-2 border-b-2 border-[#c4c3c3]">
			<div className="flex space-x-2 sm:space-x-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.029 2.5401C11.326 2.37514 11.6602 2.28857 12 2.28857C12.3398 2.28857 12.674 2.37514 12.971 2.5401L20.486 6.7141C20.6418 6.80074 20.7716 6.92746 20.862 7.08113C20.9524 7.23479 21 7.40983 21 7.5881V15.8231C20.9999 16.1797 20.9045 16.5299 20.7235 16.8372C20.5426 17.1446 20.2828 17.3979 19.971 17.5711L12.971 21.4611C12.674 21.6261 12.3398 21.7126 12 21.7126C11.6602 21.7126 11.326 21.6261 11.029 21.4611L4.029 17.5711C3.71736 17.398 3.45763 17.1448 3.27671 16.8377C3.0958 16.5305 3.00026 16.1806 3 15.8241V7.5881C2.99999 7.40983 3.04764 7.23479 3.13802 7.08113C3.22839 6.92746 3.3582 6.80074 3.514 6.7141L11.03 2.5401H11.029Z" stroke="#366CB1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 4.5L16.5 9.5V13M6 12.328L9 14" stroke="#366CB1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7L12 12M12 12L21 7M12 12V21.5" stroke="#366CB1" stroke-width="2" stroke-linejoin="round"/>
</svg>
				<div className="space-y-2">
					<p className="text-base text-[#3A3A3A] font-medium font-Aeonik">Package Arrived</p>
                    <p className="text-[8px] text-[#787878] font-thin font-Aeonik">Parcel ID [NNNAJKWA26] has  been......</p>
                    <a rel="noopener noreferrer" href="#" className="inline-flex items-center text-[#787878] space-x-2 text-[10px]">
					<span>10 mins ago</span>
				</a>
                <a rel="noopener noreferrer" href="#" className="flex items-center font-medium text-[#366CB1] py-2 space-x-2 text-[12px]">
					<span>Order details</span>
				</a>
                </div>
			</div>
       
			</div>
			<div className="pt-6 pb-4 space-y-2 border-b-2 border-[#c4c3c3]">
			<div className="flex space-x-2 sm:space-x-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.029 2.5401C11.326 2.37514 11.6602 2.28857 12 2.28857C12.3398 2.28857 12.674 2.37514 12.971 2.5401L20.486 6.7141C20.6418 6.80074 20.7716 6.92746 20.862 7.08113C20.9524 7.23479 21 7.40983 21 7.5881V15.8231C20.9999 16.1797 20.9045 16.5299 20.7235 16.8372C20.5426 17.1446 20.2828 17.3979 19.971 17.5711L12.971 21.4611C12.674 21.6261 12.3398 21.7126 12 21.7126C11.6602 21.7126 11.326 21.6261 11.029 21.4611L4.029 17.5711C3.71736 17.398 3.45763 17.1448 3.27671 16.8377C3.0958 16.5305 3.00026 16.1806 3 15.8241V7.5881C2.99999 7.40983 3.04764 7.23479 3.13802 7.08113C3.22839 6.92746 3.3582 6.80074 3.514 6.7141L11.03 2.5401H11.029Z" stroke="#366CB1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 4.5L16.5 9.5V13M6 12.328L9 14" stroke="#366CB1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7L12 12M12 12L21 7M12 12V21.5" stroke="#366CB1" stroke-width="2" stroke-linejoin="round"/>
</svg>
				<div className="space-y-2">
					<p className="text-base text-[#3A3A3A] font-medium font-Aeonik">Package Arrived</p>
                    <p className="text-[8px] text-[#787878] font-thin font-Aeonik">Parcel ID [NNNAJKWA26] has  been......</p>
                    <a rel="noopener noreferrer" href="#" className="inline-flex items-center text-[#787878] space-x-2 text-[10px]">
					<span>4 hours ago</span>
				</a>
                <a rel="noopener noreferrer" href="#" className="flex items-center font-medium text-[#366CB1] py-2 space-x-2 text-[12px]">
					<span>Order details</span>
				</a>
                </div>
			</div>
       
			</div>
            <div className="pt-6 pb-4 space-y-2 border-b-2 border-[#c4c3c3] mb-4">
			<div className="flex space-x-2 sm:space-x-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.029 2.5401C11.326 2.37514 11.6602 2.28857 12 2.28857C12.3398 2.28857 12.674 2.37514 12.971 2.5401L20.486 6.7141C20.6418 6.80074 20.7716 6.92746 20.862 7.08113C20.9524 7.23479 21 7.40983 21 7.5881V15.8231C20.9999 16.1797 20.9045 16.5299 20.7235 16.8372C20.5426 17.1446 20.2828 17.3979 19.971 17.5711L12.971 21.4611C12.674 21.6261 12.3398 21.7126 12 21.7126C11.6602 21.7126 11.326 21.6261 11.029 21.4611L4.029 17.5711C3.71736 17.398 3.45763 17.1448 3.27671 16.8377C3.0958 16.5305 3.00026 16.1806 3 15.8241V7.5881C2.99999 7.40983 3.04764 7.23479 3.13802 7.08113C3.22839 6.92746 3.3582 6.80074 3.514 6.7141L11.03 2.5401H11.029Z" stroke="#366CB1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 4.5L16.5 9.5V13M6 12.328L9 14" stroke="#366CB1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7L12 12M12 12L21 7M12 12V21.5" stroke="#366CB1" stroke-width="2" stroke-linejoin="round"/>
</svg>
				<div className="space-y-2">
					<p className="text-base text-[#3A3A3A] font-medium font-Aeonik">Package Arrived</p>
                    <p className="text-[8px] text-[#787878] font-thin font-Aeonik">Parcel ID [NNNAJKWA26] has  been......</p>
                    <a rel="noopener noreferrer" href="#" className="inline-flex items-center text-[#787878] space-x-2 text-[10px]">
					<span>Yesterday</span>
				</a>
                <a rel="noopener noreferrer" href="#" className="flex items-center font-medium text-[#366CB1] py-2 space-x-2 text-[12px]">
					<span>Order details</span>
				</a>
                </div>
			</div>
       
			</div>
		</div>
        </div>
  )
}

export default OneGrid