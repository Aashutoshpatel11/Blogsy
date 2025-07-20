import React, { useState } from 'react'
import service from '../../appwrite/config';
import { PostCard, Container, Loading } from "../index";
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

function MyPosts() {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect( () => {
        service.getPosts().then( (posts) => {
            if(posts){
                setPosts(posts.documents);
                setLoading(false);
            }
        } )
    }, [] )

    const userData = useSelector((state) => state.auth.userData);
    

  return ( loading? 
  ( 
    <Loading />
  ) : (
    <div className='w-full min-h-screen py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts
                    .filter( post => post?.userid === userData?.$id   )
                    .map((post) => (
                        <div key={post?.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                </Container>
        </div>
    ) )
}

export default MyPosts;