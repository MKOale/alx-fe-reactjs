import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useRecipeStore from "./components/recipeStore";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Mock recipes (for testing without backend)
  useEffect(() => {
    const mockRecipes = [
      { id: 1, title: "Jollof Rice", description: "Classic West African rice dish." },
      { id: 2, title: "Egusi Soup", description: "Melon seed soup with vegetables and meat." },
      { id: 3, title: "Pounded Yam & Efo Riro", description: "Smooth pounded yam served with rich spinach stew." },
      { id: 4, title: "Ofada Stew", description: "Local Nigerian stew with assorted meats." },
    ];
    setRecipes(mockRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* Home route → add + list */}
          <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />

          {/* T2 → Detail route */}
          <Route path="/recipes/:id" element={<RecipeDetail />} />

          {/* T3 → Favorites + Recommendations */}
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
