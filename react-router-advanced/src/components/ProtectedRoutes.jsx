import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom' 
function ProtectedRoutes() {
    const authotication={token:true}
  return (
    
      authotication.token ? <Outlet></Outlet> : <Navigate to='loggin'></Navigate>
    
  )
}

export default ProtectedRoutes
