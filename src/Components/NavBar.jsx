import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            COLLECTION
          </a>
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
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                CART DETAILS
                </a>
              </li>

            </ul>
           <div className="buttons">
              <a href="/" className="btn btn-outline-dark">
                <i className="fa fa-cart"> cart</i></a>  
           </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
