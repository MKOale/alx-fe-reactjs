import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p><strong>ID:</strong> {recipe.id}</p> {/* ✅ explicitly shows recipe.id */}
    </div>
  );
};

export default RecipeDetails;
