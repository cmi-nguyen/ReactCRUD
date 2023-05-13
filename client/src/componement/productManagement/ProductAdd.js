import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductAdd() {
  const [products,setProduct]= useState([]);
  const [formData,setFormData] = useState({
    productID: "",
    productName: "",
    price: "",
    stock: "",
    imgURL: "",
    description: ""
  });

  useEffect(()=>{
    axios.get("http://localhost:8080/product").then(function(response){
      setProduct(response.data);
    }).catch(function (error){
      console.log(error);
    })
  },[])
  
  function handleFormChange(evt){
    evt.preventDefault();
    const fielddName = evt.target.getAttribute("name");
    const fieldValue = evt.target.value;
    const newFormData ={...formData};
    newFormData[fielddName] = fieldValue;
    setFormData(newFormData);
    console.log(newFormData);
  }
  function addProduct(){
    axios.post("http://localhost:8080/product",{
      productID: products[products.length-1].productID+1,
      productName: formData.productName,
      price: formData.price,
      imgURL: formData.imgURL,
      stock: formData.stock,
      brandID: formData.brandID,
      description: formData.description
    }).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    });
    window.location.href="/product";
  }

  return (
    <div className='container'>
      <h3>Add new product</h3>
      <form onSubmit={addProduct}>
                    <div class="mb-3">
                        <label for="productName" class="form-label">Product name</label>
                        <input type="text" required class="form-control" name="productName" id="productName"
                            aria-describedby="productName" onChange={handleFormChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input type="number" required class="form-control" name="price" id="price" onChange={handleFormChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="stock" class="form-label">Stock</label>
                        <input type="number" required class="form-control" name="stock" id="stock" onChange={handleFormChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="brandID" class="form-label">Brand</label>
                        <input type="number" required class="form-control" name="brandID" id="brand" onChange={handleFormChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="img-url" class="form-label">Img URL</label>
                        <input type="text" required class="form-control"name="imgURL" id="imgURL" aria-describedby="imgURL" onChange={handleFormChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Product's description</label>
                        <textarea class="form-control" name="description" id="description" rows="3" onChange={handleFormChange}></textarea>
                    </div>

                    <div class="d-flex justify-content-evenly">
                      
                        <button type="submit" name="button3" id="button3" class="btn btn-primary">Add</button>
                    </div>
                </form>
    </div>

  )
}

export default ProductAdd