import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const AllProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  //  =============================Fetch data==========================
  useEffect(() => {
    fetchData1();
  }, []);

  async function fetchData1() {
    let res = await fetch(`http://localhost:3000/products`);
    let data = await res.json();
    setProduct(data);
  }

  //===========================Show Details:=======================
  async function showDetails(e) {
    navigate("/singleproduct", { state: e });
  }

  return (
    <>
      <section style={{ backgroundColor: "white" }}>
        <div className="container py-5">
          {product.map((e) => {
            return (
              <ProductDetails
                key={e.id}
                {...e}
                func={() => {
                  showDetails({
                    id: e.id,
                    src: e.src,
                    title: e.title,
                    sub: e.sub,
                    rate: e.rate,
                    st: e.st,
                  });
                }}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AllProduct;
