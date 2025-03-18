import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Logo } from "../../data/Constants";

const header = () => {
  const updates = [
    "انتشارت گوزن به بو پیوست",
    3000,
    "مجموعه‌ی 5 جلدی بقاء در دانشگاه آزاد",
    4000,
  ];

  return (
    <header className="pt-12" dir="rtl">
      <div className="container border flex-seperate">
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
        <a href="tel:011888888">
          011888888
          <i className="fa-solid fa-phone-volume mr-2" />
        </a>
      </div>
      <nav>
        <Link to="/">
          <img src={Logo.icon_title} alt="" />
        </Link>
      </nav>
    </header>
  );
};

export default header;
