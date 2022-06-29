import * as React from "react";
import "./Sidebar.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({
  isOpen,
  handleOnToggle,
  shoppingCart,
  products,
  subtotal,
  cartSize,
  handleOnSubmitCheckoutForm,
  handleOnCheckoutFormChange,
  checkoutForm,
}) {
  return (
    <section className="sidebar">
      <section className={isOpen ? "sidenav open" : "sidenav closed"}>
        <div className="allitems">
          <button
            className={isOpen ? "toggle-button open" : "toggle-button closed"}
            onClick={handleOnToggle}
          >
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <button className={isOpen ? "closedIcon open" : "closedIcon closed"}>
            <i className="material-icons md-48" onClick={handleOnToggle}>
              add_shopping_cart
            </i>
          </button>
        </div>
        <ShoppingCart
          isOpen={isOpen}
          shoppingCart={shoppingCart}
          products={products}
          subtotal={subtotal}
          cartSize={cartSize}
        />
        <CheckoutForm
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          isOpen={isOpen}
          shoppingCart={shoppingCart}
          checkoutForm={checkoutForm}
        />
      </section>
    </section>
  );
}
