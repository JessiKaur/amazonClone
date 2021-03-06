import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>", authUser);

      if (authUser) {
        //The user Just Logged in / The User was Logged In

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User is logged Out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/payment">
            <Header />
            {/* Payment Page */}
            <Payment />
          </Route>
          <Route path="/login">
            {/* Login Page */}
            <Login />
          </Route>
          <Route path="/checkout">
            {/* Header */}
            <Header />
            {/* CheckOut Page */}
            <Checkout />
          </Route>
          <Route path="/">
            {/* Header */}
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
