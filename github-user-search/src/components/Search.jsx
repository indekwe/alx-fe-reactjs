import React from 'react'
import fetchUserData from '../services/githubService'
import {useState} from 'react'

function Search() {
const [login,setLogin]=useState('')
const [location,setLocation]=useState('')
const [minRepos,setRepos]=useState('')
const [githubUserData,setGithubUserData]=useState(null)
const [isLoading,setIsLoading]=useState(false)
const [error,setError]=useState('')
const handleSubmit=async(e)=>{
    e.preventDefault();
    setIsLoading(true)
    setGithubUserData(null)
    setError('')
    try {
        const response=await fetchUserData({login,location,minRepos})
        setGithubUserData(response.data.items)
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
           value={login}
           onChange={(e)=>setLogin(e.target.value)}
           ></input>
           <input 
           id='location'
           type='text'
           placeholder='Search location'
           value={location}
           onChange={(e)=>setLocation(e.target.value)}
           ></input>
           <input 
           id='repos'
           type='text'
           placeholder='Minimum repos'
           value={minRepos}
           onChange={(e)=>setRepos(e.target.value)}
           ></input>
           <button type='submit'>Search</button>
        </form>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {githubUserData && (
        <div>
            {githubUserData.map((user)=>(
                <div key={user.id}>
                    <img src={user.avatar_url} alt={user.login} width="100" />
                    <p className="text-sm font-medium">Name: {user.login}</p>
                    <p className="text-sm font-medium">Location: {user.location}</p>
                    <p className="text-sm font-medium">Repos: {user.public_minRepos}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">Visit GitHub Profile</a>
                </div>
                
            ))}
          
        </div>
    )}
    </div>
    
  )
}

export default Search
