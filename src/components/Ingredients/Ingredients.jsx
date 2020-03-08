import React from "react";

export default ({ ingredients }) => {
  return (
    <div>
      <ul>
      {ingredients.map(ingredient => (
        <li key={`item:${ingredient.id}`} >{ingredient.name}  </li>
      ))}
      </ul>
    </div>
  );
}
