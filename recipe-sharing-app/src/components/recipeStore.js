import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  setRecipes: (recipes) => set({ recipes }),
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
}));

export default useRecipeStore;
