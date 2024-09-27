import React from 'react'
import fetchUserData from '../services/githubService'
import {useState} from 'react'

function Search() {
const [username,setUsername]=useState('')
const [githubUserData,setGithubUserData]=useState(null)
const [isLoading,setIsLoading]=useState(false)
const [error,setError]=useState('')
const handleChanges=(e)=>{
    setUsername(e.target.value)
    
}
const handleSubmit=async(e)=>{
    e.preventDefault();
    setIsLoading(true)
    setGithubUserData(null)
    setError('')
    try {
        const response=await fetchUserData(username)
        setGithubUserData(response.data)
    }
    catch {
        setError('Looks like we cant find the user')
    }
    finally {
        setIsLoading(false)
    }


}
  return (
    <div>
        <form onSubmit={handleSubmit}>
           <input 
           type='text'
           placeholder='Username'
           value={username}
           onChange={handleChanges}
           ></input>
           <button type='submit'>Search</button>
        </form>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {githubUserData && (
        <div>
          <img src={githubUserData.avatar_url} alt={githubUserData.name} width="100" />
          <p>Name: {githubUserData.name}</p>
          <p>Username: {githubUserData.login}</p>
          <a href={githubUserData.html_url} target="_blank" rel="noopener noreferrer">Visit GitHub Profile</a>
        </div>
    )}
    </div>
    
  )
}

export default Search
