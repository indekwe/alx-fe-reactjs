import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import BlogPosts from './components/blogPosts'
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom'
import UserLoggin from './components/UserLoggin'
function App() {
  

  return (
    <Router>
    <Routes>       
      <Route element={<Profile></Profile>}>
        <Route path="/" element={<ProfileDetails ></ProfileDetails>}></Route>
        <Route path="/setting" element={<ProfileSettings></ProfileSettings>}></Route>
      </Route>
      <Route path='/blogs/:userId' element={<BlogPosts></BlogPosts>}></Route>
      <Route path='/loggin' element={<UserLoggin></UserLoggin>}></Route>
    </Routes>
  </Router>
  )
}

export default App
