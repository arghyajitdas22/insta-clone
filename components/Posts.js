import React, { useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { useState } from 'react'
import Post from './Post';

function Posts() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const posts = [...Array(5)].map((_,i) => ({
            id: i,
            avatar: faker.internet.avatar(),
            username: faker.internet.userName(),
            image: faker.image.imageUrl(),
            caption: faker.lorem.sentence() 
        }))
        setPosts(posts)
    }, []);

  return (
    <div className='md:px-20'>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} username={post.username} avatar={post.avatar} image={post.image} caption={post.caption} />
      ))}
    </div>
  )
}

export default Posts
