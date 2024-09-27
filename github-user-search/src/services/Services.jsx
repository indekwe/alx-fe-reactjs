/* import React from 'react'

    const githubUrl= process.env._REACT_APP_URL
    const githubKey= process.env._REACT_APP_GITHUB_API_KEY
    const fetchApiGithub= async ()=>{
        try {
            const response= await fetch(githubUrl, {
                headers: {
                    Authorization: `Bearer ${githubKey}`
                }
            })
            if(!response.ok){
                throw new Error(`Error: ${response.status}`)
            }
            const data= await response.json()
            return data
        }
        catch {
            console.error('Error fetching data:', error)
        }
    }

export default fetchApiGithub
 */