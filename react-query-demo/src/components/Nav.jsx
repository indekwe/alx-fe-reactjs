import React from 'react'
import HomePage from './HomePage';
import PostsComponent from './PostsComponent'
import {useState} from 'react'
function Nav() {
    const [page, setPage] = useState('home');
  return (
    
      <div>
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('fetchPosts')}>Posts</button>
      </nav>
      {page === 'home' ? <HomePage /> : <PostsComponent />}
    </div>
    
  )
}

export default Nav
