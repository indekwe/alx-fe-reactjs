import React from 'react'
import { useParams } from 'react-router-dom'

function BlogPosts() {
    const {userId}=useParams()
  return (
    <div>
      <h2>Blog {userId}</h2>
    </div>
  )
}

export default BlogPosts
