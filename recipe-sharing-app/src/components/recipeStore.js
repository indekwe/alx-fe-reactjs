import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (id,newTitle,newDescription) => set((state)=>({
    recipes: state.recipes.map(recipe=>recipe.id===id?{...recipe, newTitle,newDescription}: recipe)
  })),
  deleteRecipe: (id)=>set((state)=>({
    recipes: state.recipes.filter(recipe=>recipe.id!==id)
  }))
}));
 
export default useRecipeStore