import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;
