import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "..";

const ProductSection = ({ title, products }) => {
  return (
    <section className="case">
      <div>
        <h3>{title}</h3>
        <Link>
          مشاهده‌ی تمام همه <i className="fa-solid fa-arrow-left ms-2" />
        </Link>
      </div>
      <Carousel type="product" things={products} />
    </section>
  );
};

export default ProductSection;
