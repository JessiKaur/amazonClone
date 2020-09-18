import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket, user }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} Items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This Order Contains a Gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      {console.log(user)}
      <button
        disabled={!user ? true : false}
        onClick={(e) => history.push("/payment")}
      >
        {!user ? "Login First to Proceed" : "Proceed to Checkout"}
      </button>
    </div>
  );
};

export default Subtotal;
