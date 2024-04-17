import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userList } from "./Userlist";

function Registration() {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ email: false, password: false });
  const navigation = useNavigate();
  const handleChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email && login.password) {
      const userDetails = userList.find((ele) => {
        return ele.email === login.email;
      });
      userDetails
        ? setError({ ...error, email: false })
        : setError({ ...error, email: true });
      if (userDetails) {
        const passwordCheck = userList.find((ele) => {
          if (ele.email === login.email) {
            return ele.password === login.password ? true : false;
          }
          return false;
        });
        passwordCheck
          ? setError({ ...error, password: false })
          : setError({ ...error, password: true });
        console.log(error);
        if (userDetails && passwordCheck) {
          localStorage.setItem("userData", JSON.stringify(login));
          navigation("/products");
        }
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
            <label htmlFor="email">Email : </label>
            <br />
            <input
              type="email"
              id="email"
              value={login.email}
              name="email"
              style={{ width: "250px", height: "30px" }}
              onChange={(e) => handleChange(e)}
            />
            <div>
              {error.email && (
                <span className="text-danger">Please Check Your Email</span>
              )}
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
              value={login.password}
              name="password"
              style={{ width: "250px", height: "30px" }}
              onChange={(e) => handleChange(e)}
            />
            <div>
              {error.password && (
                <span className="text-danger">Please Check Your Password</span>
              )}
            </div>
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
