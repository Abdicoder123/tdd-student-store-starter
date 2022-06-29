import * as React from "react";
import "./ProductGrid.css";
import "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";
//import { useState } from "react";

export default function ProductGrid(props) {
  if (props.products.length === 0) {
    return <p className="errorMsg">Nothing matches your search! Sorry</p>;
  }

  return (
    <div className="product-grid">
      {props.products.map((product, idx) => {
        return (
          <ProductCard
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
            showDescription={false}
            key={idx}
            shoppingCart={props.shoppingCart}
          />
        );
      })}
    </div>
  );
}
