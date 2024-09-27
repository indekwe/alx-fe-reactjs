
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import axios from 'axios';
import { useState } from 'react';
function App() {
  const [githubData, setGithubData]=useState(null)
  const handleSearch=async(username)=>{
    try {
      const url=process.env.REACT_APP_URL.replace('{username}', username)
      const response= await axios.get(url)
    setGithubData(response.data)
    }
    catch {
      console.error('Error', error)
    }
    
  }
  return (
   <Router>
    <div>
      <nav>
      <ul>
        <li ><Link to='/'>Home</Link></li>
        <li ><Link to='/about'>About</Link></li>
        <li ><Link to='/contacts'>Contacts</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contacts' element={<Contacts></Contacts>}></Route>
    </Routes>
    {githubData && (
          <div>
            <h2>User Data:</h2>
            <pre>{JSON.stringify(githubData, null, 2)}</pre>
          </div>
        )}
    </div>
   </Router>
  )
}

export default App
