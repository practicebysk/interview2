import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userList } from "./Userlist";

function Registration() {
  const [registration, setRegistration] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ email: false });
  const navigation = useNavigate();
  const handleChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (registration.email && registration.password) {
      const useExits = userList.find((ele) => ele.email === registration.email);
      if (!useExits) {
        localStorage.setItem("userData", JSON.stringify(registration));
        userList.push(registration);
        navigation("/products");
      } else {
        setError({ email: true });
      }
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
            <label htmlFor="email">Email : </label>
            <br />
            <input
              type="email"
              id="email"
              value={registration.email}
              name="email"
              style={{ width: "250px", height: "30px" }}
              onChange={(e) => handleChange(e)}
            />
            <div>
              {error.email && <span className="text-danger">This email id already exists</span>}
            </div>
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
