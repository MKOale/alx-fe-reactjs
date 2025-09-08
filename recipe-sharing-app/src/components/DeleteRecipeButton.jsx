// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // redirect to homepage or recipe list after delete
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
