import React, { useState } from 'react'
import service from '../../appwrite/config';
import { PostCard, Container, Loading } from "../index";
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

function MyPosts() {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    let userData = useSelector((state) => state.auth.userData);
    // console.log("UserData",userData);
    

    useEffect( () => {
        service.getPosts()
        .then( (posts) => {
            if(posts){
                setPosts(posts.documents);
                setLoading(false);
                // console.log(posts);
            }
        } )
        .catch( error => {
            console.log(error);
        } )
    }, [] )


  return ( loading? 
  ( 
    <Loading />
  ) : (
    <div className='w-full min-h-screen py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts?.filter( post => {
                        console.log("Comparing", post?.userid.toString(), userData?.$id.toString());
                        return post?.userid.toString() === userData?.$id.toString() ;
                        
                    })
                    .map( post => {
                        return (
                        <div key={post?.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 '>
                            <PostCard {...post} />
                        </div>
                    );
                    })}
                </div>
                </Container>
        </div>
    ) )
}

export default MyPosts;