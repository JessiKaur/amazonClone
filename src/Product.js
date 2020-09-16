import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addTobasket = () => {
    //Dispatch the item in to the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>
            $<strong>{price}</strong>
          </small>
        </p>
        <div className="product_rating">
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
      </div>
      <img className="product_image" src={image} alt="" />
      <button className="product_button" onClick={addTobasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
