import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import BlogPosts from './components/blogPosts'
import ProtectedRoute from './components/ProtectedRoute'
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom'
import UserLoggin from './components/UserLoggin'
function App() {
  

  return (
    <Router>
    <Routes>       
      <Route path='/blog/:id' element={<BlogPosts></BlogPosts>}></Route>
      <Route path='/loggin' element={<UserLoggin></UserLoggin>}></Route>
      <Route path='/profile' element={<ProtectedRoute></ProtectedRoute>}></Route>

    </Routes>
  </Router>
  )
}

export default App
