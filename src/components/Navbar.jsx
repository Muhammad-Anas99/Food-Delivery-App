import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "./../screens/Cart";
import { useCart, useDispatchCart } from "./ContextReducer";

const Navbar = () => {
  let data = useCart();

  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    toast.success("Successfully Loggedout");
    setTimeout(() => {
      navigate("/login");
    }, 2100);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fst-italic fs-3 fw-bold" to="/">
            GOFOOD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-4 mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                  style={{ paddingLeft: "10px" }}
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("token") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/myOrder"
                    style={{ paddingLeft: "10px" }}
                  >
                    MyOrders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            <div className="d-flex">
              {!localStorage.getItem("token") ? (
                <>
                  <Link
                    style={{ width: "90px", fontWeight: "bold" }}
                    className="btn bg-white text-success mx-1"
                    to="/signup"
                  >
                    Signup
                  </Link>
                  <Link
                    style={{ width: "90px", fontWeight: "bold" }}
                    className="btn bg-white text-success mx-1"
                    to="/login"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <div>
                  <div
                    style={{ width: "110px", gap: "2px", fontWeight: "bold" }}
                    className="btn bg-white  text-success mx-1"
                    onClick={() => {
                      setCartView(true);
                    }}
                  >
                    My Cart
                    <Badge pill bg="danger">
                      {data.length === 0 ? "" : data.length}
                    </Badge>
                  </div>
                  {cartView ? (
                    <Modal onClose={() => setCartView(false)}>
                      <Cart />
                    </Modal>
                  ) : null}
                  <div
                    style={{ width: "90px", fontWeight: "bold" }}
                    className="btn bg-danger text-white mx-1"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
