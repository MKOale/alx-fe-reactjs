import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selected = data.find((item) => item.id === parseInt(id));
    setRecipe(selected);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-lg text-gray-500">Loading recipe...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link
        to="/"
        className="inline-block mb-4 text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
