import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Navbar from "../components/Navbar";



const Signup = () => {
  const navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const responce = await fetch("http://localhost:3000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await responce.json();
    if (!json.success) {
      toast.error("Enter Valid Credentials");
      //   alert("Enter Valid Credentials");
    }
    if (json.success) {
      toast.success("Signup Successfull 🤩");
      setTimeout(() => {
        navigate("/login");
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
            <label className="form-label">Name</label>
            <input
              type="name"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="emailHelp"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
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
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputAddress1"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="m-3 btn btn-success fw-bold text-dark"
          >
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger fw-bold">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
