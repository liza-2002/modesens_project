import React from "react";
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";


export default function Navbar() {  
  const navigate = useNavigate();

  const addToCart=(e)=>{
    e.preventDefault();
    navigate('/mycart');
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-4" href="#">
            <Link to="/" className="nav-link ms-4">
              Modesens
            </Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Link to="/home" className="nav-link ms-4">
                    Home
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#">
                  <Link to="/allproduct" className="nav-link ms-4">
                    Product
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#">
                  <Link to="/women" className="nav-link ms-4">
                    Women
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#">
                  <Link to="/men" className="nav-link ms-4">
                    Men
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#">
                  <Link to="/kid" className="nav-link ms-4">
                    Kid
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#">
                  <Link to="/beauty" className="nav-link ms-4">
                    Beauty
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#">
                  <Link to="/community" className="nav-link ms-4">
                    Community
                  </Link>
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link ms-4" href="#">
                  Sales
                </a>
              </li> */}
            </ul>
            <div className="buttons">
              <a href="" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </a>
              <a href="" className="btn btn-outline-dark ms-4">
                <i className="fa fa-user-plus me-1"></i>Register
              </a>
              <a href="" className="btn btn-outline-dark ms-4" onClick={addToCart}>
                <i className="fa fa-shopping-cart me-1"></i>cart(0)
              </a>
            </div>
            {/* <div className="buttons">
              <a href="">
                <i className="fa fa">
                  <img
                    src="https://icons.veryicon.com/png/o/commerce-shopping/fine-edition-mall-icon/wishlist-1.png"
                    alt="Logo"
                    style={{ width: "20px", height: "20px" }} // Adjust the size here
                  />
                </i>
              </a>
            </div>
            <div className="buttons">
              <a href="">
                <i className="fa fa">
                  <img
                    src="https://static.thenounproject.com/png/2482673-200.png"
                    alt="Logo"
                    style={{ width: "20px", height: "20px" }} // Adjust the size here
                  />
                </i>
              </a>
            </div>
            <div className="buttons">
              <a href="">
                <i className="fa fa">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/6927/6927586.png"
                    alt="Logo"
                    style={{ width: "20px", height: "20px" }} // Adjust the size here
                  />
                </i>
              </a>
            </div>
            <div className="buttons">
              <a href="">
                <i className="fa fa-login">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2321/2321232.png"
                    alt="Logo"
                    style={{ width: "20px", height: "20px" }} // Adjust the size here
                  />
                </i>
              </a>
            </div>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
