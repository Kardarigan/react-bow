import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "..";
import { Logo } from "../../data/Constants";

const ProductSection = ({ title, products }) => {
  return (
    <section className="case">
      <div className="flex-seperate mb-5">
        <div className="flex-center gap-1">
          <img src={Logo.icon} alt="logo" className="w-10" />
          <h3>{title}</h3>
        </div>
        <Link>
          مشاهده‌ی تمام همه <i className="fa-solid fa-arrow-left ms-2 tail" />
        </Link>
      </div>
      <Carousel
        type="product"
        things={products}
        options={{
          perMove: 1,
          type: "loop",
          arrows: false,
          autoplay: true,
          pagination: false,
          gap: "1em",
          perPage: 4,
          breakpoints: {
            1200: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
          },
        }}
      />
    </section>
  );
};

export default ProductSection;
