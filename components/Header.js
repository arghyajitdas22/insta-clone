import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='px-4 pb-1 shadow-sm border-b fixed top-0 bg-white w-screen z-50 md:invisible'>
        <div className='flex justify-between py-1'>
        {/* icon of instagram */}
          <div className='relative flex items-center justify-center'>
            <FacebookOutlinedIcon className='h-10 w-10 flex-shrink-0 cursor-pointer'  layout="fill" objectFit='contain' />
          </div>
        
        {/* search bar  */}
          <div className='relative p-1.5 rounded-md text-xl'>
            <div className='absolute inset-y-0 pl-3 py-1 flex items-center pointer-events-none'>
              <SearchIcon className='text-gray-400 '/>
            </div>
            <input className='bg-gray-200 block w-full pl-12 rounded-lg pt-1 pb-1.5 border-gray-200 focus:border-gray-200 focus:ring-0' type="text" placeholder='Search' />
          </div>

        {/* notifications icon */}
          <div className=' relative flex justify-center items-center'>
            <FavoriteBorderOutlinedIcon className='footIcon' layout="fill" objectFit='contain' />
          </div>
        
        </div>
    </div>
  )
}
 
export default Header
