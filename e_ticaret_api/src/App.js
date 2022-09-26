import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert("Already added to cart");
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon products={products} handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </React.Fragment>
  );
}

export default App;
