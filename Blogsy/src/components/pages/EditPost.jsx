import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../../appwrite/config'
import {PostForm, Loading} from '../index'
import Container from '../Container/Container'
function EditPost() {

    const[post, setPost] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        service.getPost(slug).then( (post) => {
            if(post){
                setPost(post)
                setLoading(false)
            }else{
                naviagate('/')
            }
        } )
    }, [slug, navigate] )

  return loading ? (
    <Loading />
  ) : (<div className='min-h-screen w-full backdrop-blur-3xl'>
        <Container >
            <PostForm post={post} />
        </Container>
    </div>)

  
}

export default EditPost