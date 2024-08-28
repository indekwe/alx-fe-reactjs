import React from 'react'
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
