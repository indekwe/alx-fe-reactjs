import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { filteredRecipes, recipes, setRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
    setRecipes: state.setRecipes
  }));
  useEffect(() => {
    setRecipes(recipes);
  }, [recipes, setRecipes]);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))
        ) : (
          <li>No recipes found</li>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;