export * from "./cart";
import { fetchRecipes, fetchIngredients, addToCart } from "./cart";

export const init = () => {
  fetchRecipes();
  fetchIngredients();
}
