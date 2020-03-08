import React from "react";
import { Recipe } from "../.";

export default ({ recipes }) => {
  return (
    <div className="recipesList">
      {recipes.map(recipe => (
        <Recipe key={`recipe:${recipe.id}`} recipe={recipe}/>
      ))}
    </div>
  );
}
