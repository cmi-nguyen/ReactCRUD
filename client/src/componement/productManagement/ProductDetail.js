import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const id = useParams();
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        `http://localhost:8080/product/${id.productID}`
      );
      setProduct(response.data);
      console.log(response.data);
    };
    getData();
  }, []);
  return (
    <div className="container">
      
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={products.imgURL} className="img-fluid rounded-start" alt="product img"></img>
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{products.productName}</h5>
              <p className="card-text">
                {products.description}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {products.price}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
