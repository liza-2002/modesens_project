import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

const MyCart = () => {
  const [product, setProduct] = useState([]);

  //  =============================Fetch data==========================
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let res = await fetch(`http://localhost:3000/cart`);
    let data = await res.json();
    setProduct(data);
  }

  return (
    <>
      <section style={{ backgroundColor: "white" }}>
        <div className="container py-5">
          {product.map((e) => {
            return (
              <div className="container mt-1 mb-2">
                <div
                  className="row d-flex justify-content-center"
                  style={{ margin: "25px 0 10px 0" }}
                >
                  <div className="col-md-10">
                    <div className="card">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="images p-3">
                            <div className="text-center p-4">
                              {" "}
                              <img
                                id="main-image"
                                src={e.src}
                                width="250"
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="product p-4">
                            <div className="mt-4 mb-3">
                              <h5 className="text-uppercase">{e.title}</h5>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Distinctio exceptoluptate
                                debitis. Velit, tt, totam!
                              </p>
                              <div className="price d-flex flex-row align-items-center">
                                <i className="fa fa-rupee"></i>
                                <span className="act-price">{e.rate}/-</span>
                              </div>
                            </div>
                            <p className="about">{e.sub}</p>

                            <div className="cart mt-4 align-items-center">
                              
                              <i className="fa fa-heart text-muted"></i>{" "}
                              <i className="fa fa-share-alt text-muted"></i>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MyCart;
