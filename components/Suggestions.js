import React, { useEffect, useState } from 'react'
import Suggest from './Suggest';
import { faker } from '@faker-js/faker';

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(5)].map((_,i) => ({
            id: i,
            avatar: faker.internet.avatar(),
            username: faker.internet.userName(),
            job: faker.name.jobTitle()
        }))
        setSuggestions(suggestions)
    }, []);
  
  
    return (
    <div>
      <div className='flex justify-between mb-1'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions For You</h3>
        <button className='font-semibold'>See All</button>
      </div>

      {suggestions.map((profile) => (
          <Suggest key={profile.id} avatar={profile.avatar} username={profile.username} job={profile.job} />
        ))}
    </div>
  )
}

export default Suggestions
