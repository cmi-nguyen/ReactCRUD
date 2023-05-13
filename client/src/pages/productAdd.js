import React from 'react'
import ProductAdd from '../componement/productManagement/ProductAdd';
import Mainheader from '../componement/main_header';
import Footer from '../componement/main_footer';


function productAdd() {
  return (
    <>
    <Mainheader />
    {/* Body section */}
    <ProductAdd />
    <Footer />
  </>
  )
}

export default productAdd