import { Link } from "react-router-dom";

const Banner = ({ cover, alt = "Banner's Cover", href }) => {
  return (
    <section className="case h-[40vw] max-h-80">
      <Link to={href}>
        <img
          src={cover}
          alt={alt}
          className="size-full rounded-2xl bg-fullobject"
        />
      </Link>
    </section>
  );
};

export default Banner;
