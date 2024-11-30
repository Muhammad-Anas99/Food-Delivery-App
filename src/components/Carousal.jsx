import React from "react";
import food from "../assets/food.jpg";
import foodd from "../assets/foodd.jpg";
import burger from "../assets/burger.jpg";
import pizza from "../assets/pizza.jpg";
import momos from "../assets/momos.jpg";
import pasta from "../assets/pasta.jpg";
import pastry from "../assets/pastry.jpg";

const Carousal = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src={food} className="d-block w-100" alt="food" />
          </div>
          <div className="carousel-item">
            <img src={foodd} className="d-block w-100" alt="foodd" />
          </div>
          <div className="carousel-item">
            <img src={burger} className="d-block w-100" alt="burger" />
          </div>
          <div className="carousel-item">
            <img src={pizza} className="d-block w-100" alt="pizza" />
          </div>
          <div className="carousel-item">
            <img src={pasta} className="d-block w-100" alt="pasta" />
          </div>
          <div className="carousel-item">
            <img src={momos} className="d-block w-100" alt="momos" />
          </div>
          <div className="carousel-item">
            <img src={pastry} className="d-block w-100" alt="pastry" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousal;
