import React from 'react'

function Story({avatar, username}) {
  return (
    <div className='hover:scale-110 transition-all duration-200 ease-out'>
      <img src={avatar} alt="" className='h-16 w-16 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer'/>
      <p className='text-xs w-16 truncate mt-1'>{username}</p>
    </div>
  )
}

export default Story
