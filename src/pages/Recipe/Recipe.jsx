import React from "react";

export default ({ recipe, ingredients }) => {
  const getIngredientById = (id) => {
    return ingredients.find(ingredient => ingredient.id == id) || {};
  };
  return (!!recipe && (
    <div>
      <h1>{recipe.name}</h1>
      <div>{recipe.description}</div>
      <ul>
        {recipe.ingredients.map(row => {
          return (
            <li key={row.id}>
              <span>{row.qty} st, {getIngredientById(row.id).name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  ));
}
