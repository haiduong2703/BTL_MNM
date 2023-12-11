import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import InFor from "../pages/InFor";
import CatalogSearch from "../pages/CatalogSearch";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/catalogSearch" component={CatalogSearch} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/infor" component={InFor} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
