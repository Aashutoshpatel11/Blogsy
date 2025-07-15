import React from 'react'
import {Container, PostForm} from "../index"

function AddPost() {
  return (
    <div className='min-h-screen w-full backdrop-blur-3xl' >
      <Container>
        <PostForm/>
      </Container>
    </div>
  )
}

export default AddPost