import React, { useState } from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
import SpotlightCard from './Animation/SpotLightCard';
import { useEffect } from 'react';

function PostCard({ $id, title, featured_image }) {
  const[imageURL, setImageURL] = useState("");

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
          <div className='w-full text-black'>
              <div className='w-full justify-center mb-4'>
                  <img src={imageURL} alt="title"
                  className='rounded-xl w-full h-auto object-cover'
                  />
              </div>
              <h2
              className='text-xl font-bold'
              >{title}</h2>
          </div>
        </SpotlightCard>
      </Link>
  )
}
 
export default PostCard