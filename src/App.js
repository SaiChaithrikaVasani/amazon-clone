import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { auth } from "./firebase";
import "./index.css";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51Mo5RbSEzXIOH6z41OrDJVOlqkVEySWVjtV4j9vJkfmfo3G1PTDiLHGpX7CWZEJsUnkunDFyoIURgpTq9QFLk6Aj00Ez2at04I"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        //the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        //the user logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
