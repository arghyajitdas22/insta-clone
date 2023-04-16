import React, { useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { useState } from 'react'
import Post from './Post';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';

function Posts() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => (
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), 
          (snapshot)=> {
            setPosts(snapshot.docs)
          })
    ), [db]);

  return (
    <div className='md:px-20'>
      {posts.map((post) => (
        <Post 
        key={post.id} 
        id={post.id} 
        username={post.data().username} 
        avatar={post.data().profileImg} 
        image={post.data().image} 
        caption={post.data().caption} />
      ))}
    </div>
  )
}

export default Posts
