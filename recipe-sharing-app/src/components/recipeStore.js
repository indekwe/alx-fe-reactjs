import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],
  ignore: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (id,newTitle,newDescription) => set((state)=>({
    recipes: state.recipes.map(recipe=>recipe.id===id?{...recipe, newTitle,newDescription}: recipe)
  })),
  deleteRecipe: (id)=>set((state)=>({
    recipes: state.recipes.filter(recipe=>recipe.id!==id)
  })),
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))})),
      addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
      removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
      })),
      generateRecommendations: () => set(state => {
        const recommended = state.recipes.filter(recipe =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
      }),
}));
 
export default useRecipeStore