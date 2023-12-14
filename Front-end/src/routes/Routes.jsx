import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin/Admin";
import ProfileUser from "../pages/ProfileUser";
import NotFoundPage from "../pages/NotFoundPage";
import InFor from "../pages/InFor";
import CatalogSearch from "../pages/CatalogSearch";
import { useSelector } from "react-redux";

const Routes = () => {
  const user = useSelector((state) => state.user);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/contact" component={Contact} />
      <Route path="/infor" component={InFor} />
      <Route path="/catalogSearch" component={CatalogSearch} />
      {user.role === 2 ? (
        <Route path="/admin" component={Admin} />
      ) : (
        <Route path="/admin" component={NotFoundPage} />
      )}
      <Route path="/profile" component={ProfileUser} />
    </Switch>
  );
};

export default Routes;
