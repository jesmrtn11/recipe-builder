import Ingredients from "./Ingredients";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  ingredients: state.cart.ingredients
});

export default connect(mapStateToProps)(Ingredients);
