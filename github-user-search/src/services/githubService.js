import axios from 'axios'
function fetchUserData(username) {
    const githubUrl= process.env.REACT_APP_URL.replace('{username}',username)
    const githubKey= process.env.REACT_APP_GITHUB_API_KEY
    return axios.get(githubUrl,{
        headers: {
            Authorization: `token ${githubKey}`
        }
    })
  
}
export default fetchUserData
