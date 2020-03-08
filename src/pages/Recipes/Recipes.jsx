import React from "react";
import { RecipesList, Cart } from "../../components";

export default () => {
  return (
    <div className="content">
      <RecipesList/>
      <Cart/>
    </div>
  );
}
