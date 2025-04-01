import { HomeMainSlides } from "../../data/Constants";
import { Carousel } from "../index";

const Hero = () => {
  return (
    <section className="case flex-seperate">
      <Carousel type="image" things={HomeMainSlides} />
    </section>
  );
};

export default Hero;
