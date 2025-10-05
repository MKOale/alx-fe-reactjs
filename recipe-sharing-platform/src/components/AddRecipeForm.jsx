import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    // Example: Check that at least two ingredients are provided
    const ingredientList = ingredients.split(",").map((i) => i.trim());
    if (ingredientList.length < 2) {
      setError("Please list at least two ingredients (comma-separated).");
      return;
    }

    // If valid, clear form (later we can connect this to backend or state)
    console.log({
      title,
      ingredients: ingredientList,
      steps,
    });

    alert("Recipe submitted successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
        Add a New Recipe
      </h2>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label className="block text-gray-600 mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients Field */}
        <div>
          <label className="block text-gray-600 mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter ingredients, separated by commas"
            rows="3"
          ></textarea>
        </div>

        {/* Steps Field */}
        <div>
          <label className="block text-gray-600 mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter preparation steps"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
