import React, { useState } from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
import SpotlightCard from './Animation/SpotLightCard';
import { useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';


function PostCard(post) {
  const[imageURL, setImageURL] = useState("");
  

  useEffect( () => {  
    service.getFilePreview(post.featured_image)
    .then( (res) => setImageURL(res) )
    .catch( error => {
      console.log(error);
    })
  }, [post.featured_image, service] )

  

  
  return (
      <Link to={`/post/${post.$id}`} >  
        <SpotlightCard className="custom-spotlight-card bg-opacity-25" spotlightColor="rgba(0, 255, 255, 0.2)">
          <div className='w-full text-black/70'>
              <div className='w-full justify-center mb-4'>
                  <img src={imageURL} alt="title"
                  className='rounded-xl w-full h-auto object-cover'
                  />
              </div>
              <h2
              className='text-sm sm:text-lg p-4 font-bold'
              >{post.title}</h2>
              <div className='flex p-4 items-center font-medium text-xs sm:text-sm' >
                <div className='bg-blue-300 rounded-full w-10 h-10 mr-4 flex justify-center items-center text-black/50 font-semibold text-2xl font-mono bg-gradient-to-r from-[#e0aef8]  to-[#8cacf6]' >
                  {post?.username?.[0]?.toUpperCase()}
                </div>
                <div>
                  <div className='font-semibold' >{post.username}</div>
                  <div className='text-black/30'>{formatDistanceToNow(new Date(post.$createdAt), { addSuffix: true })}</div>
                </div>
              </div>
          </div>
        </SpotlightCard>
      </Link>
  )
}
 
export default PostCard