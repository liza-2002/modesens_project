import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RightIcons = styled.div`
  display: flex;
  margin-left: 35%;
  align-items: center;
  gap: 15px;
`;

const RightIconImage = styled.img`
  height: 20px;
  width: 20px;
`;

export default function Navbar() {
  const navigate = useNavigate();

  const addToCart = (e) => {
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
              <li class="nav-item">
                <a class="nav-link ms-4" href="#">
                <Link to="/allproduct" className="nav-link ms-4" style={{ color: "red" }}>
                    Shop Now
                  </Link>
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link ms-4" href="#">
                  Sales
                </a>
              </li> */}
            </ul>
            {/* <form class="d-flex" role="search">
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
            <div className="rightIcons">
            <RightIcons>
              
              <div>
                <RightIconImage
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/20px-Flag_of_India.svg.png"
                  alt=""
                />
              </div>
              <div>
                <RightIconImage
                  src="https://cdn.modesens.com/static/img/20200612account_b2.svg"
                  alt=""
                />
              </div>
            </RightIcons>
          </div>
              {/* <div>
                <img  src="https://cdn.modesens.com/static/img/20230710bell.svg"
                alt=""></img>
              </div> */}
            <div className="buttons">
              <a href="" className="btn ms-4" onClick={addToCart}>
                <img
                  src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
                  alt=""
                />
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
            </div>*/}
            {/* <form class="d-flex" role="search">
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
