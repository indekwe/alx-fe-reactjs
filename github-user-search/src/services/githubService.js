import axios from 'axios'
function fetchUserData({login,location,minRepos}) {
    const query=[]
    if(login){
        query.push(`${login} logged in`)
    }
    if(location){
        query.push(`location: ${location}`)
    }
    if(minRepos){
        query.push(`repos: ${minRepos}`)
    }
    const githubUrl= `https://api.github.com/search/users?q=${query.join('+')}&page=${page}&per_page=${perPage}`
    const githubKey= process.env.REACT_APP_GITHUB_API_KEY
    return axios.get(githubUrl,{
        headers: {
            Authorization: `token ${githubKey}`
        }
    })
  
}
export default fetchUserData
