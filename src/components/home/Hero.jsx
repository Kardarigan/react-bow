import { HomeMainSlides } from "../../data/Constants";
import { Carousel } from "../index";

const Hero = () => {
  return (
    <section className="case flex-seperate">
      <div className="rounded-2xl overflow-hidden">
        <Carousel
          type="image"
          things={HomeMainSlides}
          options={{
            perMove: 1,
            type: "loop",
            arrows: false,
            autoplay: true,
            focus: "center",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
