import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
import SpotlightCard from './Animation/SpotLightCard';

function PostCard({ $id, title, featured_image }) {
  console.log(service.getFilePreview(featured_image));
  
  return (
    <Link to={`/post/${$id}`} >  
      <SpotlightCard className="custom-spotlight-card bg-opacity-25" spotlightColor="rgba(255, 0, 0, 0.2)">
        <div className='w-full text-black'>
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featured_image)} alt="title"
                className='rounded-xl'
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