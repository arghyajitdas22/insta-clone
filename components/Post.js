import React, { useEffect, useState } from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useSession } from 'next-auth/react';
import Moment from 'react-moment';

function Post({id, username, avatar, image, caption}) {
  const {data: session} = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(null);

  useEffect(() => onSnapshot(
    collection(db, 'posts', id, 'likes'), (snapshot) => setLikes(snapshot.docs)
  ), [db, id])

  useEffect (() => setHasLiked(
    likes.findIndex((like) => like.id === session?.user?.uid) !== -1
  ),[likes])

  const likePost = async() => {
    if(hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    }
    else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username
      })
    }
    
  }

  useEffect(() => onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => setComments(snapshot.docs)
    ), 
  [db, id]
)

  const sendComment = async(e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp()
    });

  }
  
  
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
          {hasLiked ? (<FavoriteIcon onClick={likePost} className='btn text-red-500'/>) : 
            (<FavoriteBorderOutlinedIcon onClick={likePost} className='btn'/>)
          }
          <MapsUgcOutlinedIcon className='btn'/>
          <SendOutlinedIcon className='btn'/>
        </div>
        <BookmarkBorderOutlinedIcon className='btn'/>
      </div>

      {/* caption */}
      <p className='truncate pt-2'>
        {likes.length > 0 && (
          <p className='font-bold mb-1'>{likes.length} likes</p>
        )}
        
        <span className='font-bold mr-1'>{username}</span>{caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && 
        <div className='h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
          {comments.map((comment) =>(
            <div className='flex items-center space-x-2 mb-3'>
              <img className='h-7 w-7 rounded-full' src={comment.data().userImage} alt="" />
              <p className='text-sm flex-1'><span className='font-bold mr-2'>{comment.data().username}</span>{comment.data().comment}</p>
              <Moment fromNow>
                {comment.data.timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>      
      }

      {/* Comment Box */}
      <form className='invisible md:visible flex items-center'>
        <EmojiEmotionsOutlinedIcon className='h-7 w-7'/>
        <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" placeholder='Add a comment' className='border-none flex-1 focus:ring-0 outline-none'/>
        <button type='submit' disabled={!comment.trim()} onClick={sendComment} className='font-semi-bold text-blue-400'>Post</button>
      </form>
    
    </div>
  )
}

export default Post
