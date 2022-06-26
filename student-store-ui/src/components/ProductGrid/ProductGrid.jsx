import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart,
}) {
  return (
    <div className="product-grid">
      {products.map((product) => {
        return (
          <ProductCard
            showDescription={false}
            product={product}
            productID={product.id}
            quantity={shoppingCart.quantity}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        );
      })}
    </div>
  );
}
