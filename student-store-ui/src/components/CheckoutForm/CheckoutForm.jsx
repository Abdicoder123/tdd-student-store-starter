import * as React from "react";
//import { checkout } from "../../../../student-store-express-api/app";
import "./checkOutForm.css";

export default function CheckoutForm({ isOpen, 
  shoppingCart, handleOnSubmitCheckoutForm, handleOnCheckoutFormChange, checkoutForm }) {

  console.log("name", CheckoutForm?.name);
  console.log("email?", CheckoutForm?.email);
  return (
    <div className={isOpen ? "checkout-form" : "checkout-form closed"}>
      <h3>
        Payment Info
        <span>
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <div className="input-field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            className="checkout-form-input"
            type="text"
            placeholder="Student Name"
            onChange={handleOnCheckoutFormChange}
          />
        </div>
      </div>
      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            className="checkout-form-input"
            type="email"
            placeholder="student@codepath.org"
            onChange={handleOnCheckoutFormChange}
            value={CheckoutForm? CheckoutForm.email: ""}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input name="termsAndConditions" type="checkbox" />
            <span className="label">
              {"I agree to the "}
              <a
                className="terms"
                href="https://codepath-student-store-demo.surge.sh/#terms-and-conditions"
              >
                The terms and conditions
              </a>
            </span>
          </label>
        </div>
      </div>
      <p className="is-danger"></p>
      <div className="field">
        <div className="control">
          <button className="button checkout-button"
          onClick={()=> {handleOnSubmitCheckoutForm(checkoutForm, shoppingCart)}}
          > Checkout here!</button>
        </div>
      </div>
      <div className="checkout-success">
        <h3>
          Checkout Info
          <span className="icon">
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div className="content">
          <p>We'll send a comfirmation email to confirm your identity shortly.</p>
        </div>
      </div>
    </div>
  );
}
