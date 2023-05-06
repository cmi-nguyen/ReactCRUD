import React from "react";
import Footer from "../componement/main_footer";
import Mainheader from "../componement/main_header";
import ProductDetail from "../componement/productManagement/ProductDetail";

function productDetail() {
  return (
    <>
      <Mainheader />
      {/* Body section */}
      <ProductDetail />
      <Footer />
    </>
  );
}

export default productDetail;
