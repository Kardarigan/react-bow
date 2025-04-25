import React from "react";
import { Logo } from "../../data/Constants";
import { Link } from "react-router-dom";
import Carousel from "../utilities/Carousel";

const BlogSection = ({ title, blog }) => {
  return (
    <section className="case">
      <div className="flex-seperate mb-4">
        <div className="flex-center gap-1">
          <img src={Logo.icon} alt="logo" className="w-10" />
          <h3 className="title-sm">{title}</h3>
        </div>
        <Link>
          مشاهده‌ی تمام همه <i className="fa-solid fa-arrow-left ms-2 tail" />
        </Link>
      </div>
      <Carousel
        type="blog"
        things={blog}
        options={{
          perMove: 1,
          type: "loop",
          arrows: false,
          autoplay: true,
          pagination: false,
          gap: "1em",
          perPage: 3,
          breakpoints: {
            1200: {
              perPage: 2,
            },
            768: {
              perPage: 1,
            },
          },
        }}
      />
    </section>
  );
};

export default BlogSection;
