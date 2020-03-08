import store from "../store";

import {
  SET_RECIPES,
  SET_INGREDIENTS,
  ADD_TO_CART
} from "../types";

export const setRecipes = (recipes) => {
  store.dispatch({
    type: SET_RECIPES,
    recipes: recipes
  });
}

export const fetchRecipes = () => {
  return fetch("/api/recipes", {
    method: "GET",
    credentials: "same-origin"
  })
  .then(res => res.json())
  .then(res => {
    if (res.recipes) {
      setRecipes(res.recipes);
    }
  });
}

export const setIngredients = (ingredients) => {
  store.dispatch({
    type: SET_INGREDIENTS,
    ingredients: ingredients
  });
}

export const fetchIngredients = () => {
  return fetch("/api/ingredients", {
    method: "GET",
    credentials: "same-origin"
  })
  .then(res => res.json())
  .then(res => {
    if (res.ingredients) {
      setIngredients(res.ingredients);
    }
  });
}

export const addToCart = (recipe) => {
  store.dispatch({
    type: ADD_TO_CART,
    item: recipe
  });
}
