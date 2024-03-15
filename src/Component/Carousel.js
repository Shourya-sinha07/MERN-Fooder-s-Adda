import React from "react";
import "./style.css";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className=" carousel slide  carousel-fade extra" style={{objectFit:"contain !important"}}
        data-bs-ride="carousel"
      >
        <div className="shadow1"></div>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption " style={{ zIndex: "10" }}>
            <form className="d-flex" role="search">
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
          <div
            className="carousel-item active   "
            data-bs-interval="3000"
          >
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
    </>
  );
}
