import React, { useState } from 'react'
import service from '../../appwrite/config';
import { PostCard, Container, Loading } from "../index";
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import SplitText from '../Animation/SplitText';

function MyPosts() {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    let userData = useSelector((state) => state.auth.userData);
    // console.log("UserData",userData);
    

    useEffect( () => {
        setLoading(true)
        service.getPosts()
        .then( (posts) => {
            if(posts){
                console.log("POSTS::", posts);
                let filteredPost = posts.documents.filter((post) => post?.userid.toString() === userData?.$id.toString() )
                setPosts(filteredPost)
                setLoading(false);
            }
        } )
        .catch( error => {
            setPosts([])
            console.log(error);
        } )
    }, [userData] )


  return ( loading? 
  ( 
    <Loading />
  ) : (
    posts.length ? (
        <div className='w-full min-h-screen py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts?.map( post => {
                        return (
                        <div key={post?.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 '>
                            <PostCard {...post} />
                        </div>
                    );
                    })}
                </div>
            </Container>
        </div>
    ) : (
        <div className='w-full h-screen' >
            <SplitText
            text="NO POSTS"
            className="text-lg sm:text-4xl font-semibold text-center text-black/50"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            // onLetterAnimationComplete={}
            />
        </div>
    )
    ) )
}

export default MyPosts;