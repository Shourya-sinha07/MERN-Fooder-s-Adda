import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      {/* <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></Link>
          <span className="text-muted">© 2024 Fooder's Adda, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"></ul>
      </footer> */}
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </Link>
      <span className="text-muted">© 2024 Fooder's Adda, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><Link className="text-muted" to="#"><i className="fa-brands fa-twitter"></i></Link></li>
      <li className="ms-3"><Link className="text-muted" to="#"><i className="fa-brands fa-square-instagram"></i></Link></li>
      <li className="ms-3"><Link className="text-muted" to="#"><i className="fa-brands fa-facebook"></i></Link></li>
    </ul>
  </footer>
    </div>
  );
}
