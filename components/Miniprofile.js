import React from 'react'
import Image from 'next/image'
import myPic from './images/IMG_20221001_203749.jpg'
import { signOut, useSession } from 'next-auth/react'

function Miniprofile() {
  const {data: session} = useSession();
  
  return (
    <div className='flex items-center justify-between cursor-pointer'>
      <Image src={session?.user?.image} className='w-16 h-16 rounded-full p-[2px] border' width={16} height={16} />
      <div className='flex-1 mx-4'>
        <p className='font-bold text-sm'>{session?.user?.username}</p>
        <p className='text-sm text-gray-400'>{session?.user?.name}</p>
      </div>
      <button onClick={signOut} className='text-sm font-semibold text-blue-400 ml-16'>Sign Out</button>
    </div>
  )
}

export default Miniprofile
