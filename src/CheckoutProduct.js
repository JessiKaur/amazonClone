import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct_image" src={image} alt="Banner" />

      <div className="checkoutproduct_info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p>
                <span role="img" aria-label="Rating">
                  🌟
                </span>
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkoutproduct_button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
