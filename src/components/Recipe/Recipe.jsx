import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions";

export default ({ recipe, ingredients, isChecked }) => {

  const getIngredientById = (id) => {
    return ingredients.find(ingredient => ingredient.id == id) || {};
  };

  const toggleChange = () => {
    console.log("toggleChangefunction", this);
    // this.setState({
    //   isChecked: !isChecked,
    // });
  }

  return (!!recipe && (
    <div className="recipe">
      <div className="recipe-img" style={{ backgroundImage: `url("${recipe.url}")` }}>
        <div className="recipe-img--inner">
        </div>
      </div>
      <div className="recipe-content">
        <h1>{recipe.name}</h1>
        <div>{recipe.description}</div>
        <strong>Ingredients: </strong>
        <ul>
          {recipe.ingredients.map(row => {
            return (
              <li key={row.id}> 
                <span>{row.qty} st, 
                  <label>{getIngredientById(row.id).name}
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={toggleChange()}
                    />
                  </label>
                </span>
              </li>
            );
          })}
        </ul>
        <button onClick={() => addToCart(recipe)}>Add Ingredients</button>
      </div>
    </div>
  ));
}

