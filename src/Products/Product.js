import React, { useEffect, useState } from "react";
import { productsList } from "./Productlist";
import { Link, useNavigate } from "react-router-dom";
import { buyProductList } from "./BuyProductlist";

function Product() {
  const [product, setproduct] = useState(productsList);
  const [search, setSearch] = useState();
  const navigation = useNavigate();
  const onSearchProducts = () => {
    if (search) {
      const searchData = productsList.filter((ele) => {
        return ele.name.toLowerCase().includes(search?.toLowerCase());
      });
      setproduct(searchData);
    } else {
      setproduct(productsList);
    }
  };
  const onSortProducts = () => {
    const sortData = productsList.sort((a, b) => {
      return a.price - b.price;
    });
    debugger;
    console.log(sortData);
    setproduct(sortData);
  };
  const onBuyProduct = (id) => {
    const dataList = productsList.find((p) => p.id === id);
    buyProductList.push(dataList);
  };
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigation("/");
    }
  });
  return (
    <>
      <div className="d-flex">
        <div>
          <input
            type="text"
            value={search}
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={onSearchProducts}>Search</button>
        </div>
        <button onClick={onSortProducts}>Sort product</button>
        <Link to={"/buyProductList"}>Buy List</Link>
      </div>
      <div className="d-flex justify-content-center m-2">
        {product.length > 0 ? (
          product?.map((ele, i) => {
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
                <button
                  className="w-100 p-2 btn btn-primary"
                  onClick={() => onBuyProduct(ele.id)}
                >
                  Buy
                </button>
              </div>
            );
          })
        ) : (
          <h1>Not it Item</h1>
        )}
      </div>
    </>
  );
}

export default Product;
