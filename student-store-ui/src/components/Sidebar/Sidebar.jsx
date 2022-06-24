import * as React from "react";
import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <section className={props.isOpen ? "sidebar" : "sidebar closed"}>
        <button
          className="toggle-button"
          onClick={props.handleOnToggle}
        ></button>
        <button className={props.isOpen ? "closed" : "checkout-Btn"}></button>
        <ShoppingCart
          isOpen={props.isOpen}
          products={products.getProducts}
          shoppingCart={props.shoppingCart}
        />
        <CheckoutForm
          isOpen={props.isOpen}
          shoppingCart={props.shoppingCart}
          checkoutForm={props.checkOutForm}
          handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
        />
      </section>
    </section>
  );
}
