import { FavoritesList } from './FavoritesList';
import { RecommendationsList } from './RecommendationsList';
import { RecipeCard } from './RecipeCard';
import { useRecipeStore } from './recipeStore';

export const Home = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h1>Recipe App</h1>

      <section>
        <h2>All Recipes</h2>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>

      <section>
        <FavoritesList />
      </section>

      <section>
        <RecommendationsList />
      </section>
    </div>
  );
};
