import React from 'react'
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom' 
function Profile() {
    const authotication={token:false}
  return (
    <Routes>
      <Route element={<Profile></Profile>}>
    <Route path="/" element={<ProfileDetails ></ProfileDetails>}></Route>
    <Route path="/setting" element={<ProfileSettings></ProfileSettings>}></Route>
    <Route element={<ProtectedRoutes></ProtectedRoutes>}></Route>
  </Route>
    </Routes>
    
  )
}

export default Profile
