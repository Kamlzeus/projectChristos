import React from "react";
import "./index.css";

export function ProductCard(props) {
  const { image, category, title, price } = props.data;

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={title} />
      <div className="product-category">{category}</div>
      <h4 className="product-title">{title}</h4>
      <div className="price-button-container">
        <div className="product-price">${price.toFixed(2)}</div>
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
}
