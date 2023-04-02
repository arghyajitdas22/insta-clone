import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import Miniprofile from './Miniprofile'
import Suggestions from './Suggestions'

function Feed() {
  return (
    <div className='xl:flex' >
      <div className='flex flex-col'>
        <div className='pt-20 md:pt-10 md:max-w-3xl md:pl-28 md:pr-5 lg:pl-56 lg:max-w-4xl xl:pl-96 xl:max-w-5xl'>
          <Stories/>
        </div>
        <div className='pt-6 md:pt-5 md:max-w-3xl md:pl-28 md:pr-5 lg:pl-56 lg:max-w-4xl xl:pl-96 xl:max-w-5xl'>
          <Posts/>
        </div>
      </div>
      <div className='invisible xl:visible'>
        <div className='pt-12 pl-12'>
          <Miniprofile/>
        </div>
        <div className='pt-4 pl-12'>
          <Suggestions/>
        </div>
      </div>
    </div>
  )
}

export default Feed
