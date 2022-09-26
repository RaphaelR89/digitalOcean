import React, { useState } from "react";
import "./Product.css";

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

function getTotal(total) {
  return total.toLocaleString(undefined, currencyOptions);
}

export default function Product() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function add() {
    setCart(["ice cream"]);
    setTotal(5);
  }
  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.length} total items.</div>
      <div>Total: {getTotal(total)}</div>
      <div className="product">
        <span role="img" aria-label="ice cream">
          🍦
        </span>
      </div>
      <button onClick={add}>Add</button>{" "}
      <button
        onClick={() => {
          setCart([]);
          setTotal(0);
        }}
      >
        Remove
      </button>
    </div>
  );
}
