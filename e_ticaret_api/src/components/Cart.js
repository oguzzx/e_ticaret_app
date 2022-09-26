import React, { useState, useEffect } from "react";
import "../styles/cart.css";

function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handlePrice = () => {
    let sum = 0;
    cart.forEach((item) => {
      Math.floor((sum += item.price));
    });
    setTotal(sum);
  };
  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="cart">
      {cart.map((product) => {
        return (
          <div>
            <div className="cart_box">
              <img src={product.image} />
              <div className="cart_details">
                <p>{product.title}</p>
                <p>{product.price}</p>
              </div>

              <button onClick={() => handleRemove(product.id)}>Remove</button>
              <p>{product.price}</p>
            </div>
          </div>
        );
      })}
      <h2>Total Price : {total} </h2>
    </div>
  );
}

export default Cart;
