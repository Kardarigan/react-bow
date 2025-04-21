import React from "react";
import { Carousel } from "..";
import { Categories } from "../../data/Products";

const CategorySection = () => {
  return (
    <section className="case">
      <Carousel
        type="category"
        things={Categories}
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

export default CategorySection;
