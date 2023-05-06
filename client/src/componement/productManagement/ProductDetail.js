import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [products, setProduct] = useState([]);
  const id = useParams();
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        `http://localhost:8080/product/${id.productID}`
      );
      setProduct(response.data);
      console.log(response.data);
      
    };
    getData();
  }, [id]);
  return (
    
    <div className="container">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="" class="img-fluid rounded-start" alt="product img"></img>
          </div>

          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{products[0].productName}</h5>
              <p class="card-text">
                {products[0].description}
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  {products[0].price}
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
