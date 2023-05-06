import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Products() {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:8080/product").then(function(response){
        setProduct(response.data)
        console.log(response.data)
      }).catch(function(error){
        console.log(error)
      })

    },[]);
    const Navigate = useNavigate();
    function GetUserDetail(evt){
      evt.preventDefault();
      const id= evt.target.id;
      Navigate(`/product/${id}`);

    }
  return (
    <div className="container">
      <table  className="table table-hover">
        <thead>
          <tr>
            <th scope='col'>productID</th>
            <th scope='col'>productName</th>
            <th scope='col'>price</th>
            <th scope='col'>description</th>
            <th scope='col'>action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product)=>(
            <tr>
              <th scope='row'>{product.productID}</th>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td><button id={product.productID} type="button" className="btn btn-primary" onClick={GetUserDetail}>Detail</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products