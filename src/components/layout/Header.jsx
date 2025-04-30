import { Link } from "react-router-dom";
import { Logo, NavButtons } from "../../data/Constants";
import { Navbar, Updates } from "../";

const header = () => {
  return (
    <header className="container pt-12 padding-x">
      <div className="flex-seperate">
        <Updates />
        <a href="tel:02166887898" className="flex items-center">
          <span className="title mt-2">2166887898+</span>
          <i className="fa-solid fa-phone-volume mr-2" />
        </a>
      </div>
      <nav className="mt-5 flex-seperate sticky top-0">
        <Link to="/">
          <img src={Logo.icon_title} alt="logo" className="w-40" />
        </Link>
        <Navbar />
        <ul className="flex gap-x-1">
          {NavButtons.map((btn, index) => {
            return (
              <Link
                to={btn.href}
                key={index}
                className="button button-rose px-4 py-[0.8rem]"
              >
                <i className={btn.icon} />
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default header;
