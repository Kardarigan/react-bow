import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { ProductCard } from "..";

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
                <a
                  href={item.href}
                  className="flat flex items-center p-5 group"
                >
                  <i class="fa-solid fa-triangle -rotate-90 absolute -left-1 opacity-0 group-hover:opacity-100 group-hover:left-4 transition-all text-slate-700 tail duration-300" />
                  <img
                    src={item.logo}
                    alt="company logo"
                    className="size-full h-14 object-contain group-hover:translate-x-4 transition-all duration-300"
                  />
                </a>
              ) : type === "product" ? (
                <ProductCard thing={item} />
              ) : null}
            </SplideSlide>
          );
        })}
    </Splide>
  );
};

export default Carousel;
