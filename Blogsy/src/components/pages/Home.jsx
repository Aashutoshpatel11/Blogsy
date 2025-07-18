import React, { useState , useEffect} from 'react'
import service from '../../appwrite/config'
import Container from '../Container/Container'
import PostCard from '../PostCard'
import SplitText from "./../Animation/SplitText";
import Magnet from '../Animation/Magnet';


function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        }
        )
    }, [])
    
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    

  if (posts.length === 0) {
        return (
            <Magnet padding={25} disabled={false} magnetStrength={25}>
                <div className="w-full min-h-screen py-8 mt-4 text-center">
                    <Container>
                        <div className="flex flex-wrap">
                            <div className="p-5 w-full">
                                {/* <h1 className="text-2xl font-bold hover:text-gray-500">
                                    Login to read posts
                                </h1> */}
                                <SplitText
                                text="Login To See Content"
                                className="text-4xl font-semibold text-center text-black/50"
                                delay={100}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                                onLetterAnimationComplete={handleAnimationComplete}
                                />
                            </div>
                        </div>
                    </Container>
                </div>
            </Magnet>
        )
    }
    return (
        <div className='w-full min-h-screen py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='  p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home