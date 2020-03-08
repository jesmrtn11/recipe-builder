import Recipe from "./Recipe";
import "./Recipe.css";

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  ingredients: state.cart.ingredients,
  isChecked: true
});

export default connect(mapStateToProps)(Recipe);
