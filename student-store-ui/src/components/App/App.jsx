import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../Product Detail/ProductDetail";
import ProductView from "../ProductView/ProductView";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = React.useState();
  const [isFetching, setIsFethcing] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([
    { itemID: "", quantity: 0 },
  ]);
  const [checkoutForm, submitCheckoutForm] = React.useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);
      try {
        const strtProducts = await axios.get(
          "https://codepath-store-api.herokuapp.com/store"
        );
        setProducts(strtProducts.data.products);
        //console.log(startingProducts.data.products)
      } catch (error) {
        setError(error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchProducts();
  }, []);
  const handleOnToggle = () => {
    if (isOpen == false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  function handleAddItemToCart(productID) {
    let found = false;
    let item = 0;
    shoppingCart.forEach((element) => {
      if (element.itemID === productID) {
        found = true;
        item = element;
        return;
      }
    });
    if (found) {
      let index = shoppingCart.indexOf(item);
      let newArray = [...shoppingCart];
      newArray[index].quantity += 1;
      setShoppingCart(newArray);
    } else {
      setShoppingCart((prevCart) => [
        ...prevCart,
        { itemID: productID, quantity: 1 },
      ]);
    }
  }
  function handleRemoveItemFromCart(productID) {
    let found = false;
    let item = 0;
    shoppingCart.forEach((element) => {
      if (element.itemID === productID) {
        found = true;
        item = element;
        return;
      }
    });
    if (found) {
      let index = shoppingCart.indexOf(item);
      let newArray = [...shoppingCart];
      if (newArray[index].quantity === 0) {
        newArray[index].quantity = 0;
        setShoppingCart(newArray);
      } else {
        newarray[index].quantity -= 1;
        setShoppingCart(newArray);
      }
    } else {
      setShoppingCart((prevCart) => [
        ...prevCart,
        { itemID: productID, quantity: 0 },
      ]);
    }
  }
  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({ name, value });
  };

  const handleOnSubmitCheckoutForm = () => {
    axios
      .post("https://codepath-store-api.herokuapp.com/store", {
        user: { name: checkoutForm.name, email: checkoutForm.value },
        shoppingCart,
      })
      .then(function (response) {})
      .catch(function (error) {});
  };
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleAddItemToCart={handleAddItemToCart}
                  shoppingCart={shoppingCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  products={products}
                />
              }
            />
            <Route
              path="/products/:productID"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                />
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>

          {/* <Navbar />
          <Sidebar />
          <Home /> */}
        </main>
      </BrowserRouter>
    </div>
  );
}
