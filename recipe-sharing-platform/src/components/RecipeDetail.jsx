import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500">Recipe not found...</p>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-4 text-center">{recipe.title}</h1>

        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          {recipe.ingredients?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
