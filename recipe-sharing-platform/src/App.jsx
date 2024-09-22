import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import { ToastContainer } from 'react-toastify'
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="recipe" element={<HomePage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}
export default App