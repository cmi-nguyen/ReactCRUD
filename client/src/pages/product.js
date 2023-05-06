import React from 'react'
import  Footer from '../componement/main_footer'
import Mainheader from '../componement/main_header'
import Products from '../componement/productManagement/Products'

function product() {
  return (
    <>
    <Mainheader />
    {/* Body section */}
    <Products/>
    <Footer />
</>

  )
}

export default product