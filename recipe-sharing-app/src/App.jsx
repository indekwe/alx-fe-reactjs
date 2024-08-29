import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar';
function App() {
  return (
    <Router>
    <div>
      <h1>Recipe Manager</h1>
      <SearchBar />
      <Routes>
        <Route path="/" element={<>
          <AddRecipeForm />
          <RecipeList />
        </>} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
