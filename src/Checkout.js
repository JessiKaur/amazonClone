import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://www.unitasterdays.com/images/banner-uosw.gif"
          alt=""
        />
        <h3>Your Shopping Basket</h3>
        <hr />
        <div className="checkout_baskets"></div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
