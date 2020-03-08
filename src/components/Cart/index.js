import Cart from "./Cart";
import "./Cart.css";

import { connect } from "react-redux";

const mapState = (state) => ({
  items:       state.cart.items,
  ingredients: state.cart.ingredients
});

export default connect(mapState)(Cart);
