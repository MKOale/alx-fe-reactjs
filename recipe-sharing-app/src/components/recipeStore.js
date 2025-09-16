import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: "", // ✅ added

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  setSearchTerm: (term) => // ✅ added
    set((state) => {
      const filtered = state.recipes.filter((r) =>
        r.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),
}));
