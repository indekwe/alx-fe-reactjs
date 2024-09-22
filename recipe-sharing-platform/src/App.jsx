import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="recipe" element={<HomePage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}
export default App