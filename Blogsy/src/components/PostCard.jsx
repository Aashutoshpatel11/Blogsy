import React, { useState } from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
import SpotlightCard from './Animation/SpotLightCard';
import { useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import parse from "html-react-parser";


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
              className='text-sm sm:text-lg px-4 py-2 font-bold text-black/60'
              >{post.title}</h2>
              <p className='px-4 py-2 text-xs text-black/50 ' >{parse(post?.content?.substring(0,250).trim())}</p>
              <div className='flex px-4 py-2 items-center font-medium text-xs sm:text-sm' >
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