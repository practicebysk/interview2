import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userList } from "./Userlist";

function Registration() {
  const [registration, setRegistration] = useState({
    name: "",
    password: "",
  });
  const navigation = useNavigate();
  const handleChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (registration.name && registration.password) {
      localStorage.setItem("userData", JSON.stringify(registration));
      userList.push(registration);
      navigation("/products");
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Registration</h1>
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
              value={registration.name}
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
              value={registration.password}
              name="password"
              style={{ width: "250px", height: "30px" }}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="w-100 btn btn-primary">
            Submit
          </button>
          <Link to={"login"}>Login</Link>
        </form>
      </div>
    </>
  );
}

export default Registration;
