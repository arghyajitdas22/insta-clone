import React, { useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { useState } from 'react'
import Story from './Story'
import { useSession } from 'next-auth/react';

function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    const {data: session} = useSession();

    useEffect(() => {
        const suggestions = [...Array(20)].map((_,i) => ({
            id: i,
            avatar: faker.internet.avatar(),
            username: faker.internet.userName()
        }))
        setSuggestions(suggestions)
    }, []);
    
    return (
    
      <div className='flex space-x-3 bg-white overflow-x-scroll py-1 scrollbar-thin scrollbar-thumb-gray-200'>
        {session && <Story avatar={session?.user.image} username={session?.user?.username}/>}
        
        {suggestions.map((profile) => (
          <Story key={profile.id} avatar={profile.avatar} username={profile.username}/>
        ))}
      </div>
  )
}

export default Stories
