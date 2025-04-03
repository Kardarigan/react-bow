import { HomeMainSlides, HomeSideSlides } from "../../data/Constants";
import { Carousel } from "../index";

const Hero = () => {
  return (
    <section className="case mt-8 lg:grid grid-cols-3 gap-5 flex flex-col">
      <div className="rounded-3xl overflow-hidden lg:col-span-2">
        <Carousel
          type="image"
          things={HomeMainSlides}
          options={{
            perMove: 1,
            type: "loop",
            arrows: true,
            autoplay: true,
            focus: "center",
          }}
        />
      </div>
      <div className="rounded-3xl overflow-hidden">
        <Carousel
          type="image"
          things={HomeSideSlides}
          options={{
            perMove: 1,
            type: "loop",
            arrows: true,
            autoplay: true,
            focus: "center",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
