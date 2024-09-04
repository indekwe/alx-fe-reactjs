import React from 'react'
import {useAuth} from '.react'
import { Outlet,Navigate } from 'react-router-dom'
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom' 
function ProtectedRoute() {
    const useAuth={token:true}
  return (
    
    useAuth.token ? <Outlet></Outlet> : <Navigate to='loggin'></Navigate>
    
  )
}

export default ProtectedRoute
