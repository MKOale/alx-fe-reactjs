import React, { useEffect } from 'react';
import { Home } from './components/Home';
import { useRecipeStore } from './components/recipeStore';

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);

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
    <div>
      <Home />
    </div>
  );
}

export default App;
