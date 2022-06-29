import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../Product Detail/ProductDetail";
import ProductView from "../ProductView/ProductView";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NotFound from "../NotFound/NotFound";

export default function App() {
  var item = {
    itemId: 4,
    quantity: 2,
  };

  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setcheckoutForm] = useState(null);
  const [subtotal, setSubtotal] = useState(null);

  useEffect(async () => {
    let url = `https://codepath-store-api.herokuapp.com/store`;

    try {
      let response = await axios.get(url);
      let responseData = response.data;
      setProducts(responseData.products);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }, []);

  const handleAddItemToCart = (productId) => {
    var newItem;
    var newCart = [];

    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        shoppingCart[i].quantity++;
        setShoppingCart([...shoppingCart]);
        var tempPrice =
          products.find((item) => item.id === productId).price + subtotal;
        setSubtotal(tempPrice);

        return;
      }
    }
    newItem = {
      itemId: productId,
      quantity: 1,
    };

    setShoppingCart([newItem, ...shoppingCart]);
    var tempPrice =
      products.find((item) => item.id === productId).price + subtotal;
    setSubtotal(tempPrice);
  };

  const handleRemoveItemFromCart = (productId) => {
    var newItem;
    var newCart = [];

    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId === productId) {
        if (shoppingCart[i].quantity != 1) {
          shoppingCart[i].quantity--;
          setShoppingCart([...shoppingCart]);
          var tempPrice =
            subtotal - products.find((item) => item.id === productId).price;
          setSubtotal(tempPrice);
          return;
        } else {
          shoppingCart.splice(i, 1);
          setShoppingCart([...shoppingCart]);
          var tempPrice =
            subtotal - products.find((item) => item.id === productId).price;
          setSubtotal(tempPrice);
          return;
        }
      }
    }
  };

  const handleOnToggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleOnCheckoutFormChange = (name, value) => {};

  const handleOnSubmitCheckoutForm = () => {};

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleOnToggle={handleOnToggle}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnCheckoutFormChange}
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                  isOpen={isOpen}
                  checkoutForm={checkoutForm}
                  setShoppingCart={setShoppingCart}
                  subtotal={subtotal}
                  cartSize={shoppingCart.length}
                  setSubtotal={setSubtotal}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                  isOpen={isOpen}
                  products={products}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  handleOnToggle={handleOnToggle}
                  checkoutForm={checkoutForm}
                  subtotal={subtotal}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
