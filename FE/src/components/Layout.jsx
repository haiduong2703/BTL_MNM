import React, { useEffect } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import ProductViewModal from "./ProductViewModal";

import Routes from "../routes/Routes";
import { getUser } from "../api/product";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user-modal/userModalSlice";

const Layout = () => {
  const userName = sessionStorage.getItem("username");

  const dispatch = useDispatch();

  useEffect(() => {
    const handleLogin = async () => {
      if (userName) {
        const userLogin = await getUser(userName);
        dispatch(
          setUser({ name: userLogin.tenDangNhap, role: userLogin.role })
        );
        console.log("userLogin: ", userLogin);
      }
    };
    handleLogin();
  }, []);

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
