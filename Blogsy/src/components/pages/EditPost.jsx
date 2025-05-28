import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../../appwrite/config'
import {PostForm} from '../index'

function EditPost() {

    const[post, setPost] = useState(null)
    const naviagate = useNavigate()
    const {slug} = useParams()

    useEffect( () => {
        Service.getPost(slug).then( (post) => {
            if(post){
                setPost(post)
            }else{
                naviagate('/')
            }
        } )
    }, [slug, navigate] )

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost