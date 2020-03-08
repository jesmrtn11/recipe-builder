import Recipes from "./Recipes";
import "./Recipes.css";

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  recipes: state.cart.recipes
});

export default connect(mapStateToProps)(Recipes);
