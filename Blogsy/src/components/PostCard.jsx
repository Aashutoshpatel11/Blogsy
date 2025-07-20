import React, { useState } from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
import SpotlightCard from './Animation/SpotLightCard';
import { useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import parse from "html-react-parser";


function PostCard({$id,title, featured_image, tagline, username, $createdAt }) {
  const[imageURL, setImageURL] = useState(null);
  

  useEffect( () => {  
    service.getFilePreview(featured_image)
    .then( (res) => setImageURL(res) )
    .catch( error => {
      console.log(error);
    })
  }, [featured_image, service] )

  return (
      <Link to={`/post/${$id}`} >  
        <SpotlightCard className="custom-spotlight-card bg-opacity-25" spotlightColor="rgba(0, 255, 255, 0.2)">
          <div className='w-full text-black/70'>
              <div className='w-full justify-center mb-4'>
                  <img src={imageURL} alt="title"
                  className='rounded-xl w-full h-auto object-cover'
                  />
              </div>
              <h2
              className='text-sm sm:text-lg px-4 py-2 font-bold text-black/60'
              >{title}</h2>
              <p className='px-4 py-2 text-xs text-black/50 ' >{tagline?.substring(0,250).trim()}</p>
              <div className='flex px-4 py-2 items-center font-medium text-xs sm:text-sm' >
                <div className='bg-blue-300 rounded-full w-10 h-10 mr-4 flex justify-center items-center text-black/50 font-semibold text-2xl font-mono bg-gradient-to-r from-[#e0aef8]  to-[#8cacf6]' >
                  {username?.[0]?.toUpperCase()}
                </div>
                <div>
                  <div className='font-semibold' >{username}</div>
                  <div className='text-black/30'>{formatDistanceToNow(new Date($createdAt), { addSuffix: true })}</div>
                </div>
              </div>
          </div>
        </SpotlightCard>
      </Link>
  )
}
 
export default PostCard