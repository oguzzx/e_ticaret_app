import React from "react";

function Cards({ product, handleClick }) {
  const { id, title, price, description, image, category } = product;
  return (
    <div className="cards" key={id}>
      <div className="image_box">
        <img src={image} alt={title} />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <button onClick={() => handleClick(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Cards;
