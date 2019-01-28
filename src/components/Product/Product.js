import React from "react";
import "./Product.css";

function Product(props) {
  const { url, productname, price, userid } = props.products;
  return (
    <div className="entireRedBox">
      <p>
        <img src={url} alt={productname} />
      </p>
      <p> {productname} </p>
      <br />
      <p> {price} </p>

      <button onClick={() => props.deleteButton(userid)}>Delete </button>
      <button onClick={() => props.editButton(userid)}>Edit </button>
    </div>
  );
}

export default Product;
