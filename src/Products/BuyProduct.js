import React, { useEffect, useState } from "react";
import { buyProductList } from "./BuyProductlist";

function BuyProduct() {
  const [products, setProduct] = useState(buyProductList ? buyProductList : "");
  return (
    <div>
      <div className="d-flex justify-content-center p-2">
        {products.length > 0 ? products?.map((ele, i) => {
          return (
            <div key={i} className="card m-2" style={{ width: "18rem" }}>
              <img
                src={ele.image}
                alt={ele.name}
                height={"300px"}
                className="card-img-top"
              />
              <h1>{ele.name}</h1>
              <p>{ele.description}</p>
              <p>₹{ele.price}</p>
            </div>
          );
        }) : ( <h1>Not it Items</h1> )}
      </div>
    </div>
  );
}

export default BuyProduct;
