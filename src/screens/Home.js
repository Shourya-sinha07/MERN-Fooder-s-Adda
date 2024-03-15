import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Card from "../Component/Card";
// import Carousel from "../Component/Carousel";
// import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItems] = useState([]);

  //This loaddata is function is use to get data from the database
  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "appliction/json",
      },
    });
    response = await response.json();
    console.log(response);
    console.log(response.foodCategory);
    console.log(response.foodItems);
    setfoodCat(response.foodCategory);
    setfoodItems(response.foodItems);
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div>
      <div className="position-relative">
        <Navbar />
      </div>

      <div className="position-relative mt-5">
        <div className="position-relative">
          <div
            id="carouselExampleInterval"
            className=" carousel slide carousel-fade extra"
            style={{ objectFit: "contain !important" }}
            data-bs-ride="carousel"
          >
            <div className="shadow1"></div>
            <div className="carousel-inner" id="carousel">
              <div className="carousel-caption " style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center" role="search">
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
              <div className="carousel-item active   " data-bs-interval="3000">
                <img
                  src="https://source.unsplash.com/random/900x700/?burger"
                  className="d-block w-100 imgnew"
                  alt="..."
                  style={{ filter: "brightness(30%" }}
                />
              </div>
              <div className="carousel-item " data-bs-interval="2000">
                <img
                  src="https://source.unsplash.com/random/900x700/?pastry"
                  className="d-block w-100"
                  style={{ filter: "brightness(30%" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item " data-bs-interval="2000">
                <img
                  src="https://source.unsplash.com/random/900x700/?pizza"
                  className="d-block w-100"
                  style={{ filter: "brightness(30%" }}
                  alt="..."
                />
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
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
                data-bs-target="#carouselExampleInterval"
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
        </div>
      </div>

      <div className="position-relatve">
        <div className="m-3 container position-relative">
          {foodCat.length !== 0 ? (
            foodCat.map((data) => (
              <div key={data._id} className="row mb-3">
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem.length !== 0 ? (
                  foodItem
                    .filter(
                      (items) =>
                        items.CategoryName === data.CategoryName &&
                        items.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => (
                      <div
                        key={filterItems._id}
                        className="col-12 col-md-6 col-lg-3"
                      >
                        {/* //filterItems.options[0] here this is half and full with there corresponding rate  */}
                        <Card
                          foodItem={filterItems}
                          options={filterItems.options[0]}
                        />
                      </div>
                    ))
                ) : (
                  <div>No items</div>
                )}
              </div>
            ))
          ) : (
            <div>No categories</div>
          )}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
