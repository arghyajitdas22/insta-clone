import React from 'react'
import Image from 'next/image'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import myPic from './images/IMG_20221001_203749.jpg'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '@/atoms/modalAtom';

function Footer() {
  const {data: session} = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);
  
  return (
    <div className='flex justify-between items-center px-5 shadow-sm border-t fixed bottom-0 bg-white w-screen z-50 md:invisible'>
      <button className='footBtn' onClick={() => {router.push('/')}}>
        <HomeOutlinedIcon className='footIcon' />
      </button>
      <button className='footBtn' >
        <ExploreOutlinedIcon className='footIcon' />
      </button>
      <button className='footBtn' >
        <OndemandVideoOutlinedIcon className='footIcon' />
      </button>
      <button className='footBtn'  onClick={()=>setOpen(true)}>
        <AddCircleOutlineOutlinedIcon className='footIcon'/>
      </button>
      <button className='footBtn' >
        <ForumOutlinedIcon className='footIcon' />
        <div className='absolute h-4 w-4 top-0.5 right-21 text-xs bg-red-600 flex items-center justify-center rounded-full text-white'>3</div>
      </button>
      <button className='footBtn'>
        <Image onClick={signOut} className='footIcon rounded-full ' src={session?.user?.image} alt="profile-pic" width={6} height={6}/>
      </button>
    </div>
  )
}

export default Footer
