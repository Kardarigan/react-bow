import { Carousel } from "..";
import { PublishersInfo } from "../../data/Constants";

const Publishers = () => {
  return (
    <section className="case" dir="ltr">
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
            768: {
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
