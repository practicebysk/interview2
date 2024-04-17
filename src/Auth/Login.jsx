import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userList } from "./Userlist";

function Registration() {
  const [login, setlogin] = useState({
    name: "",
    password: "",
  });
  const navigation = useNavigate();
  const handleChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.name && login.password) {
      const userDetails = userList.find((ele) => {
        return ele.name === login.name && ele.password === login.password;
      });
      if (userDetails) {
        localStorage.setItem("userData", JSON.stringify(login));
        navigation("/products");
      }
    } else {
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Login</h1>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ height: "100vh", alignItems: "center" }}
      >
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="name">Name : </label>
            <br />
            <input
              type="name"
              id="name"
              value={login.name}
              name="name"
              style={{ width: "250px", height: "30px" }}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="password" className="mt-2">
              Password :{" "}
            </label>
            <br />
            <input
              type="password"
              className="mb-2"
              id="password"
              value={login.password}
              name="password"
              style={{ width: "250px", height: "30px" }}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="w-100 btn btn-primary">
            Submit
          </button>
          <Link to={"/"}>Registration</Link>
        </form>
      </div>
    </>
  );
}

export default Registration;
