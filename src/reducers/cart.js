import {
  SET_RECIPES,
  SET_INGREDIENTS,
  ADD_TO_CART
} from "../types";

const initialState = {
  recipes: [],
  ingredients: [],
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.recipes
      };

    case SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients
      };
    
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.item]
      };

  }
  return state;
}
