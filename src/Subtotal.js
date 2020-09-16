import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Basket" + basket);
  const totalPrice = basket.reduce((a, b) => a + b.price, 0);

  console.log("X=====>" + totalPrice);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} Items): <strong>${totalPrice}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This Order Contains a Gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
