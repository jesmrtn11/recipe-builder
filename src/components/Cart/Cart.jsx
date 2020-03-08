import React from "react";

export default ({ items, ingredients }) => {
  const getIngredientById = (id) => {
    return ingredients.find(ingredient => ingredient.id == id) || {};
  };

  let buyList = [];
  let uniqueRecipes = [];

  for (let recipe of items) {
    for (let ingredient of recipe.ingredients) {
      let existing = buyList.find(x => x.id == ingredient.id);
      if (existing != null) {
        existing.qty += ingredient.qty;
      } else {
        buyList.push({
          ...ingredient
        });
      }
    }
  }

  for (let recipe of items) {
    let existing = uniqueRecipes.find(x => x.id == recipe.id);
    if (existing != null) {
      existing.qty++;
    } else {
      uniqueRecipes.push({
        ...recipe,
        qty: 1
      });
    }
  }

  return (
    <div className="cart">
      <div className="cart__inner">
        <h3>Cart</h3>
        <p>Här är alla recept du lagt i kundvagnen:</p>
        <ul>
        {uniqueRecipes.map((recipe, i) => (
          <li key={`recipe:${i}`}>{recipe.qty} st, {recipe.name}</li>
        ))}
        </ul>
        <p>Här kommer lista med alla ingredienser som behövs:</p>
        <ul>
          {buyList.map((item, i) => (
            <li key={`ingredient:${i}`}>{item.qty} st, {getIngredientById(item.id).name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
