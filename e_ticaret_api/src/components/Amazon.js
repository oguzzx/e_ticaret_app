import React from "react";
import Cards from "./Cards";
import "../styles/amazon.css";

function Amazon({ products, handleClick }) {
  return (
    <section>
      {products.map((product) => {
        return (
          <Cards key={product.id} product={product} handleClick={handleClick} />
        );
      })}
    </section>
  );
}

export default Amazon;
