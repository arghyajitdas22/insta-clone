import React from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

function Post({id, username, avatar, image, caption}) {
  return (
    <div className='bg-white border-b shadow-sm pb-2'>
      {/* Header */}
      <div className='flex items-center pt-4'>
        <img src={avatar} alt="" className='rounded-full h-12 w-12 object-contain p-1 mr-3'/>
        <p className='flex-1 font-bold'>{username}</p>
        <MoreHorizOutlinedIcon className='h-5 w-5'/>
      </div>

      {/* Image */}
      <img src={image} alt="" className='object-cover w-full' />

      {/* Buttons */}
      <div className='flex justify-between pt-2'>
        <div className='flex space-x-4'>
            <FavoriteBorderOutlinedIcon className='btn'/>
            <MapsUgcOutlinedIcon className='btn'/>
            <SendOutlinedIcon className='btn'/>
        </div>
        <BookmarkBorderOutlinedIcon className='btn'/>
      </div>

      {/* caption */}
      <p className='truncate pt-2'><span className='font-bold mr-1'>{username}</span>{caption}</p>

      {/* Comments */}

      {/* Comment Box */}
      <form className='invisible md:visible flex items-center'>
        <EmojiEmotionsOutlinedIcon className='h-7 w-7'/>
        <input type="text" placeholder='Add a comment' className='border-none flex-1 focus:ring-0 outline-none'/>
        <button className='font-semi-bold text-blue-400'>Post</button>
      </form>
    
    </div>
  )
}

export default Post
