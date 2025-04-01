import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Carousel = ({ type, things, options, interval = "2000" }) => {
  return (
    <Splide aria-label="infantry-class-slider" dir="ltr" options={options}>
      {Array.isArray(things) &&
        things.map((item, index) => {
          return (
            <SplideSlide key={index} data-splide-interval={interval}>
              {type === "image" ? (
                <div>
                  <Link to={item.path}>
                    <img
                      src={item.cover}
                      alt="Event Banner"
                      className="w-full h-screen bg-fullobject"
                    />
                  </Link>
                </div>
              ) : (
                ""
              )}
            </SplideSlide>
          );
        })}
    </Splide>
  );
};

export default Carousel;
