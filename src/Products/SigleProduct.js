import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsList } from "./Productlist";

function SingleProduct() {
  const { id } = useParams();
  const foundProduct = productsList.find((ele) =>{
    return ele.id === id;
  });
  // setProduct(foundProduct);
  const [product, setProduct] = useState(foundProduct);

  return (
    <div className="d-flex justify-content-center m-2">
      {product ? ( // Check if product exists
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src={product.image}
            alt={product.name}
            height={"300px"}
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text">{product.description}</p>
            <p className="card-text">₹{product.price}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleProduct;
