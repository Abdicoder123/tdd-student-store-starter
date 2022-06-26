import * as React from "react";
import "./Home.css";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart,
}) {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <Hero />

      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        shoppingCart={shoppingCart}
      />
    </div>
  );
}
