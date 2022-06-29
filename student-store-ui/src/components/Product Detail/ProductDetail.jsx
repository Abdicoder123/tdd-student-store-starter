import * as React from "react";
import "./ProductDetail.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import ProductView from "../ProductView/ProductView";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function ProductDetail(props) {
  const [product, setProduct] = useState(null);
  let { productId } = useParams();

  useEffect(async () => {
    let url =
      `https://codepath-store-api.herokuapp.com/store` + `/` + productId;

    try {
      let response = await axios.get(url);
      let responseData = response.data.product;

      setProduct(responseData);
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (product === null) {
    return <NotFound />;
  }

  return (
    <div className="product-detail">
      <Navbar />
      <Sidebar
        handleOnCheckOutFormChange={props.handleOnCheckOutFormChange}
        handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
        handleOnToggle={props.handleOnToggle}
        checkoutForm={props.checkoutForm}
        isOpen={props.isOpen}
        shoppingCart={props.shoppingCart}
        products={props.products}
        subtotal={props.subtotal}
      />
      <ProductView
        product={product}
        productId={product.id}
        quantity={
          props.shoppingCart.find((item) => item.itemId === product.id)
            ? props.shoppingCart.find((item) => item.itemId === product.id)
                .quantity
            : null
        }
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
        showDescription={props.showDescription}
      />
    </div>
  );
}
