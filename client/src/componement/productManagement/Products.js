import axios from "axios";
import React, { useEffect,  useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/product")
      .then(function (response) {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },[]);
  const Navigate = useNavigate();
  function GetProductDetail(evt) {
    evt.preventDefault();
    const id = evt.target.id;
    Navigate(`/product/${id}`);
  }
  function AddProduct(evt){
    evt.preventDefault();
    Navigate(`/add-product`)
  }
  function DeleteProduct(evt){
    evt.preventDefault();
    const id= evt.target.id;
    axios.delete(`http://localhost:8080/product/${id}`);
    window.location.href="/product";
  }
  return (
    <div className="container">
      <h3>Product management</h3>
      <form method="get" action="search-product">
            <div class="row">
                <div class="col">
                    <div class="input-group">
                        <input type="search" name="searchInput" class="form-control" placeholder="Search Product"
                            aria-label="Search Product" aria-describedby="button-addon1"></input>
                        <button class="btn btn-outline-secondary" name="button1" type="submit"
                            id="button1">Search</button>
                    </div>
                </div>
                <div class="col">
                    <button class="btn btn-primary" name="button2" type="button" id="button2" onClick={AddProduct} >Add Product</button>
                </div>
            </div>
        </form>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">productID</th>
            <th scope="col">productName</th>
            <th scope="col">price</th>
            <th scope="col">description</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            
            <tr>
              <th scope="row">{product.productID}</th>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <div className="d-flex">
                <button
                  id={product.productID}
                  type="button"
                  className="btn btn-primary"
                  onClick={GetProductDetail}
                >
                  Detail
                </button>
                <button
                  id={product.productID}
                  type="button"
                  className="btn btn-danger"
                  onClick={DeleteProduct}
                >
                  Delete
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
