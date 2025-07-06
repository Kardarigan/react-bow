import React from "react";
import Breadcrumb from "../utilities/Breadcrumb";

const ProductInfo = ({ title, author, price, rate, cover }) => {
  return <div className="w-full">    <hr className="w-full" />
    <Breadcrumb />
    <div>
      <h6 className="title">
        {rate}
        <i className="fa-solid fa-start"></i>
      </h6>
      <h1 className="title">{title}</h1>
    </div>
  </div>;
};

export default ProductInfo;
