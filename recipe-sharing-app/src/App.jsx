import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { path } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'

function App() {
  return (
    <>
      <RecipeList></RecipeList>
      <AddRecipeForm ></AddRecipeForm>
      <RecipeDetails></RecipeDetails>
    </>
  )
}

export default App
