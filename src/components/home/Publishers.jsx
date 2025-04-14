import { Carousel } from "..";
import { PublishersInfo } from "../../data/Constants";

const Publishers = () => {
  return (
    <section className="case">
      <Carousel
        type="logo"
        things={PublishersInfo}
        options={{
          perMove: 1,
          type: "loop",
          arrows: false,
          autoplay: true,
          pagination: false,
          gap: "2em",
          perPage: 6,
          breakpoints: {
            1200: {
              perPage: 5,
            },
            992: {
              perPage: 4,
            },
            640: {
              perPage: 2,
            },
          },
        }}
      />
    </section>
  );
};

export default Publishers;
