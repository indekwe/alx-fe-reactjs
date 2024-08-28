import React from 'react'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  return (
    <>
      <RecipeList></RecipeList>
      <AddRecipeForm ></AddRecipeForm>
    </>
  )
}

export default App
