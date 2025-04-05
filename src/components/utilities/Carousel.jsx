import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Carousel = ({ type = "image", things, options, interval = "2000" }) => {
  return (
    <Splide aria-label="infantry-class-slider" dir="ltr" options={options}>
      {Array.isArray(things) &&
        things.map((item, index) => {
          return (
            <SplideSlide key={index} data-splide-interval={interval}>
              {type === "image" ? (
                <div className={item.colorClass + " h-[24vw] min-h-72 block"}>
                  <Link to={item.href} className="size-full flex-center">
                    <h3 className="title">{item.label}</h3>
                  </Link>
                </div>
              ) : type === "logo" ? (
                <a href={item.href} className="flat block p-5">
                  <img
                    src={item.logo}
                    alt="company logo"
                    className="size-full h-20 object-contain"
                  />
                </a>
              ) : null}
            </SplideSlide>
          );
        })}
    </Splide>
  );
};

export default Carousel;
