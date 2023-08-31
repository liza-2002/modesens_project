import React from "react";
import { useLocation } from "react-router-dom";

function SingleProduct() {
  const location = useLocation();
  const passedProps = location.state;

  //===========================Add to cart=======================
  async function addtocart() {
      var previd = 0;
      // =================Fetch last id from carts id===============
      const response = await fetch("http://localhost:3000/cart");
      const data = await response.json();
      if (data.length > 0) {
        const lastObjectData = data[data.length - 1];
        previd = lastObjectData.id;
      }
      // =================Add 1 on Fetched last id from carts id===============
      const modifiedData = [passedProps].map((item) => ({
        ...passedProps,
        pid: item.id,
        id: previd + 1
      }));

      const res = await fetch(`http://localhost:3000/cart`, {
        method: "POST",
        body: JSON.stringify(...modifiedData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => console.log(res));
      alert("Product added successfully");
    
  }

  return (
    <>
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
                        src={passedProps.src}
                        width="250"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="mt-4 mb-3">
                      <h5 className="text-uppercase">{passedProps.title}</h5>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Distinctio exceptoluptate debitis. Velit, tt,
                        totam!
                      </p>
                      <div className="price d-flex flex-row align-items-center">
                        <i className="fa fa-rupee"></i>
                        <span className="act-price">{passedProps.rate}/-</span>
                      </div>
                    </div>
                    <p className="about">{passedProps.sub}</p>

                    <div className="cart mt-4 align-items-center">
                      {" "}
                      <button
                        className="btn btn-danger text-uppercase mr-2 px-4"
                        onClick={addtocart}
                      >
                        Add to cart
                      </button>{" "}
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
    </>
  );
}

export default SingleProduct;
