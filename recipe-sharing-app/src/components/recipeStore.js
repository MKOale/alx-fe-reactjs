import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],           // ✅ Added for T3
  recommendations: [],     // ✅ Added for T3

  // Create
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Read/Initialize
  setRecipes: (recipes) => set({ recipes }),

  // Update
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Delete
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Favorites
  addToFavorites: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),
  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== id),
    })),

  // Recommendations (basic mock-up for now)
  setRecommendations: (recipes) => set({ recommendations: recipes }),
}));

export default useRecipeStore;
