import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Image from 'next/image'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import myPic from './images/IMG_20221001_203749.jpg'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function TabSideNav() {
  return (
    <div className='fixed flex flex-col items-center pt-8 px-3 shadow-sm border-r max-w-[70px] h-screen bg-white invisible md:visible lg:visible xl:invisible z-50'>
      {/* Instagram icon */}
      <div className='flex justify-center'>
        <FacebookRoundedIcon className='h-10 w-10'/>
      </div>

      {/* buttons */}
      <div className='flex flex-col justify-center mt-8 space-y-2'>
        <button className='tabBtn' >
          <HomeOutlinedIcon className='tabIcon' />
          
        </button>
        <button className='tabBtn' >
          <SearchIcon className='tabIcon' />
          
        </button>
        <button className='tabBtn' >
          <ExploreOutlinedIcon className='tabIcon' />
          
        </button>
        <button className='tabBtn' >
          <OndemandVideoOutlinedIcon className='tabIcon' />
          
        </button>
        <button className='tabBtn' >
          <ForumOutlinedIcon className='tabIcon' />
          
        </button>
        <button className='tabBtn' >
          <FavoriteBorderOutlinedIcon className='tabIcon'/>
          <div className='absolute h-4 w-4 top-1 left-5 text-xs bg-red-600 flex items-center justify-center rounded-full text-white'>3</div>
          
        </button>
        <button className='tabBtn' >
          <AddCircleOutlineOutlinedIcon className='tabIcon' />
          
        </button>
        <button className='tabBtn' >
          <Image src={myPic} className='rounded-full h-6 w-6'/>
          
        </button>
      </div>

      {/* More button */}
      <button className='fixed bottom-8 flex items-center justify-center h-12 w-12 hover:bg-gray-200 hover:rounded-full hover:scale-110 transition-all duration-150 ease-out' >
        <MoreVertOutlinedIcon className='tabIcon' />
        
      </button>
    </div>
  )
}

export default TabSideNav
