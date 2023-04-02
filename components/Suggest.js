import React from 'react'

function Suggest({avatar, username, job}) {
  return (
    <div className='flex items-center justify-between mt-4'>
      <img src={avatar} alt="" className='w-10 h-10 rounded-full border p-[2px]'/>
      <div className='flex-1 ml-4'>
        <h2 className='font-semibold text-sm'>{username}</h2>
        <h3 className='text-sm text-gray-400'>{job}</h3>
      </div>
      <button className='text-blue-400 text-xs font-bold'>Follow</button>
    </div>
  )
}

export default Suggest
