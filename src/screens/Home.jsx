import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "./../components/Card";

import food from "../assets/food.jpg";
import foodd from "../assets/foodd.jpg";
import burger from "../assets/burger.jpg";
import pizza from "../assets/pizza.jpg";
import momos from "../assets/momos.jpg";
import pasta from "../assets/pasta.jpg";
import pastry from "../assets/pastry.jpg";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:3000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    setFoodItem(data[0]);
    setFoodCat(data[1]);
    // console.log(data[0], data[1]);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            style={{ objectFit: "contain !important" }}
          >
            <div className="carousel-inner" id="carousel">
              <div className="carousel-caption" style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  {/* <button
                    className="btn btn-outline-success text-white bg-success"
                    type="submit"
                  >
                    Search
                  </button> */}
                </div>
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
        {!localStorage.getItem("token") ? (
          <>
            <hr />
            <h1 className="fs-2 mt-2 ml-4">Please Login To Purchase Food</h1>

            <h1 className="fs-2 mt-4">Please Login To See Foods</h1>
          </>
        ) : (
          <div className="container">
            {foodCat.length > 0
              ? foodCat.map((data) => {
                  return (
                    <div className="row mb-3">
                      <div key={data._id} className="fs-3 m-3">
                        {data.CategoryName}
                      </div>
                      <hr />
                      {foodItem.length > 0 ? (
                        foodItem
                          .filter(
                            (item) =>
                              item.CategoryName == data.CategoryName &&
                              item.name
                                .toLocaleLowerCase()
                                .includes(search.toLocaleLowerCase())
                          )
                          .map((filterItems) => {
                            return (
                              <div
                                key={filterItems._id}
                                className="col-12 col-md-6 col-lg-3 mb-5 mt-2"
                              >
                                <Card
                                  foodItem={filterItems}
                                  options={filterItems.options[0]}
                                ></Card>
                              </div>
                            );
                          })
                      ) : (
                        <div>No Such Data Found</div>
                      )}
                    </div>
                  );
                })
              : ""}
          </div>
        )}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
