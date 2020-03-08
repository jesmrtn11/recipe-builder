import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Nav } from "./partials";
import store from "./store";
import * as pages from "./pages";
import { init } from "./actions";
import "./assets/css";

init();

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path="/recipe/:id" component={pages.Recipe}/>
          <Route path="/" component={pages.Recipes}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
