import React from 'react'
import { useParams } from 'react-router-dom'

function BlogPosts() {
    const {id}=useParams()
  return (
    <div>
      <h2>Blog {id}</h2>
    </div>
  )
}

export default BlogPosts
