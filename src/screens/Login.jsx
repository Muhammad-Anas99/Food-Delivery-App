import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const responce = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await responce.json();
    if (!json.success) {
      toast.error("Invalid Email or Password🤔");
      //   alert("Enter Valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("token", json.authToken);
      toast.success("Login Successfull 🤩");
      setTimeout(() => {
        navigate("/");
      }, 2100);
    }
  };
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container bg-secondary mt-5 p-3 pt-4 pb-4 rounded-1">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="m-3 btn btn-success fw-bold text-dark"
          >
            Login
          </button>
          <Link to="/signup" className="m-3 btn btn-danger fw-bold">
            I'm a new User
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
