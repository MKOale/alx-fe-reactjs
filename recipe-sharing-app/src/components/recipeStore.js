import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [], 
  favorites: [], 

  setRecipes: (recipes) => set({ recipes }), // 👈 new line

  addFavorite: (recipeId) => set(state => ({
    favorites: [...new Set([...state.favorites, recipeId])]
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  recommendations: [],

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(recipe =>
      !favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
