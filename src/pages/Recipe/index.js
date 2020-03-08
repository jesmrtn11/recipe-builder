import Recipe from "./Recipe";
import { connect } from "react-redux";

const mapState = (state, props) => ({
  recipe: state.cart.recipes.find(recipe => recipe.id == props.match.params.id),
  ingredients: state.cart.ingredients
});

export default connect(mapState)(Recipe);
