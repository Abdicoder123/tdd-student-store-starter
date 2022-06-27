import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {
  const description = showDescription ? (
    <div className="product-description">{product.description}</div>
  ) : (
    ""
  );
  return (
    <div className="product-card">
      {description}

      <Link to={"/products/" + productId}>
        <img
          src={product.image}
          height="200px"
          width="200px"
          className="image"
        />
      </Link>
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">
        {showDescription ? description : ""}
      </p>

      <button className="add" onClick={() => handleAddItemToCart}>
        {"+"}
      </button>
      <button className="remove" onClick={() => handleRemoveItemToCart}>
        {"-"}
      </button>

      <div className="product-quantity">{quantity}</div>
    </div>
  );
}
