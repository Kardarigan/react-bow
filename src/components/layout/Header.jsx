import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Logo, NavButtons } from "../../data/Constants";
import { Navbar } from "../";

const header = () => {
  const updates = [
    "انتشارت سگ آبی به بُو پیوست",
    3000,
    "مجموعه‌ی 5 جلدی بقاء در دانشگاه آزاد",
    4000,
  ];

  return (
    <header className="container pt-12 padding-x">
      <div className="flex-seperate">
        <div className="flex">
          <h6 className="ml-2 bg-rose-500 rounded-full">آپدیت</h6>
          <p className="text-base max-sm:text-sm">
            <TypeAnimation
              sequence={updates}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </p>
        </div>
        <a href="tel:011888888" className="flex items-center">
          <span className="title mt-2">11888888+</span>
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
