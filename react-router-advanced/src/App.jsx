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
      <Route path='/blog/:id' element={<BlogPosts></BlogPosts>}></Route>
      <Route path='/loggin' element={<UserLoggin></UserLoggin>}></Route>
      <Route element={<Profile></Profile>}></Route>
    </Routes>
  </Router>
  )
}

export default App
