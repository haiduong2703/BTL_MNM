import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Helmet from "../components/Helmet";
import CartItem from "../components/CartItem";
import numberWithCommas from "../utils/numberWithCommas";

import Button from "../components/Button";
import { Link } from "react-router-dom";
import { getProductBySlug } from "../api/product.js";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  console.log(cartItems);

  const [cartProducts, setCartProducts] = useState([]);
  const [username, setUsername] = useState(sessionStorage.getItem("username"));
  const [totalProducts, setTotalProducts] = useState(0);
  console.log(username);
  const [totalPrice, setTotalPrice] = useState(0);
  const getCartItemsDetal = async (cartItems) => {
    const promises = cartItems.map(async (e) => {
      const productSlug = await getProductBySlug(e.slug);
      return {
        ...e,
        product: productSlug,
      };
    });

    return Promise.all(promises);
  };
  useEffect(() => {
    async function updateCart() {
      const updatedCart = await getCartItemsDetal(cartItems);
      setCartProducts(updatedCart);

      const totalProducts = updatedCart.reduce(
        (total, item) => total + Number(item.quantity),
        0
      );
      setTotalProducts(totalProducts);

      const totalPrice = updatedCart.reduce(
        (total, item) =>
          total + Number(item.product.price) * Number(item.quantity),
        0
      );
      setTotalPrice(totalPrice);
    }

    updateCart();
  }, [cartItems]);

  return (
    <div>
      {username ? (
        <Helmet title="Giỏ hàng">
          <div className="cart">
            <div className="cart__info">
              <div className="cart__info__txt">
                <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
                <div className="cart__info__txt__price">
                  <span>Thành tiền </span>
                  <span>{numberWithCommas(totalPrice)}</span>
                </div>
              </div>
              <div className="cart__info__btn">
                <Button size="block">Đặt hàng</Button>
                <Link to="/catalog">
                  <Button size="block">Tiếp tục mua hàng</Button>
                </Link>
              </div>
            </div>
            <div className="cart__list">
              {cartProducts.map((item, index) => (
                <CartItem item={item} index={index} key={index} />
              ))}
            </div>
          </div>
        </Helmet>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Cart;
