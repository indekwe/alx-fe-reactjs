
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
function App() {
  return (
   <Router>
    <div>
      <nav>
      <ul>
        <li ><Link to='/'>Home</Link></li>
        <li ><Link to='/about'>About</Link></li>
        <li ><Link to='/contact'>Contacts</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contacts' element={<Contacts></Contacts>}></Route>
    </Routes>
    </div>
   </Router>
  )
}

export default App
