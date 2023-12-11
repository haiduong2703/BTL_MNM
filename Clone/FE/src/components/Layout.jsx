import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import ProductViewModal from "./ProductViewModal";

import Routes from "../routes/Routes";

const Layout = () => {
  sessionStorage.setItem("User", "HaiDuong");
  const storgeValue = sessionStorage.getItem("username");
  console.log(storgeValue);
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <Header {...props} />
            <div className="container">
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
            <ProductViewModal />
          </div>
        )}
      />
    </BrowserRouter>
  );
};
export default Layout;
