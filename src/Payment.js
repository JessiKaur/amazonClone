import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <div className="payment_top">
          <h3>Total Items: {basket.length}</h3>
          <h3>Total Price: ${getBasketTotal(basket)}</h3>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h4>Address Details:</h4>
          </div>
          <div className="payment_info">
            <p>{user?.email}</p>
            <p>176 Torrance Woord, Brampton</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h4>Products Details:</h4>
          </div>
          <div className="payment_info">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h4>Card Details:</h4>
          </div>
          <div className="payment_info">
            <p>{/* Stripe Will Go Here */}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
