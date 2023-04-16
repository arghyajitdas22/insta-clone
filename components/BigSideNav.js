import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Image from 'next/image'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import SearchIcon from '@mui/icons-material/Search';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '@/atoms/modalAtom';

function BigSideNav() {
  const {data: session} = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);
  
  return (
    <div className='fixed flex flex-col pt-8 pl-6 pr-4 shadow-sm border-r max-w-[250px] h-screen bg-white invisible md:invisible lg:invisible xl:visible z-50'>
      {/* Instagram icon */}
      <div className='flex items-center'>
        <FacebookRoundedIcon className='h-14 w-14'/>
      </div>

      {/* buttons */}
      <div className='flex flex-col justify-center mt-8 space-y-2'>
        <button className='button' onClick={() => {router.push('/')}} >
          <HomeOutlinedIcon className='icon' />
          <span className='info'>Home</span>
        </button>
        <button className='button' >
          <SearchIcon className='icon' />
          <span className='info'>Search</span>
        </button>
        <button className='button' >
          <ExploreOutlinedIcon className='icon' />
          <span className='info'>Explore</span>
        </button>
        <button className='button' >
          <OndemandVideoOutlinedIcon className='icon' />
          <span className='info'>Reels</span>
        </button>
        <button className='button' >
          <ForumOutlinedIcon className='icon' />
          <span className='info'>Messages</span>
        </button>
        <button className='button' >
          <FavoriteBorderOutlinedIcon className='icon'/>
          <div className='absolute h-4 w-4 top-1 left-5 text-xs bg-red-600 flex items-center justify-center rounded-full text-white'>3</div>
          <span className='info'>Notifications</span>
        </button>
        <button className='button' onClick={()=> setOpen(true)}>
          <AddCircleOutlineOutlinedIcon className='icon' />
          <span className='info'>Create</span>
        </button>
        <button className='button' >
          <Image src={session?.user?.image} className='rounded-full h-6 w-6 absolute left-[3.5px]' width={6} height={6}/>
          <span className='info'>Profile</span>
        </button>
      </div>

      {/* More button */}
      <button className='fixed bottom-8 flex items-center h-12 w-[200px] hover:bg-gray-200 hover:rounded-2xl hover:scale-110 transition-all duration-150 ease-out' >
        <MoreVertOutlinedIcon className='icon' />
        <span className='info'>More</span>
      </button>
    </div>
  )
}

export default BigSideNav
