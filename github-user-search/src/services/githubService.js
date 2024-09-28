import axios from 'axios'
function fetchUserData({username,location,repos}) {
    const query=[]
    if(username){
        query.push(`${username} logged in`)
    }
    if(location){
        query.push(`location: ${location}`)
    }
    if(username){
        query.push(`repos: ${repos}`)
    }
    const githubUrl= `${process.env.REACT_APP_URL}?q=${query.join('+')}&page=${page}&per_page=${perPage}`
    const githubKey= process.env.REACT_APP_GITHUB_API_KEY
    return axios.get(githubUrl,{
        headers: {
            Authorization: `token ${githubKey}`
        }
    })
  
}
export default fetchUserData
