import React from "react";
import { Logo } from "../../data/Constants";
import { Updates, FooterLinks } from "..";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 mo text-slate-100 pb-5">
      <section className="text-center">
        <div className="inline-block p-3 bg-slate-800 shadow-md shadow-slate-950 rounded-full -translate-y-4">
          <img src={Logo.icon} alt="logo" className="size-8 rotate-6" />
        </div>
      </section>
      <section className="case mt-0">
        <div className="flex-seperate max-lg:flex-col gap-y-5">
          <div className="w-80 max-lg:order-last">
            <Updates />
          </div>
          <div className="flex gap-5">
            <button
              className={
                "button-outline-rose rounded-xl backdrop-filter-none title-sm w-10 h-12 transition-all"
              }
              onClick={() => window.scrollTo(0, 0)}
            >
              <i className="fa-solid fa-chevron-up mt-1" />
            </button>
            <button
              className={"w-10 h-12 group text-4xl text-rose-500"}
              onClick={() => window.scrollTo(0, 0)}
            >
              <i className="fa-regular fa-bookmark group-hover:font-bold mt-1" />
            </button>
          </div>
          <div className="w-80 max-lg:hidden" dir="ltr">
            <Updates />
          </div>
        </div>
        <FooterLinks />
        <div className="flex gap-5 mt-12">
          <Link>
            <img
              src={Logo.icon_empire}
              alt="Imperial Coat of Arms"
              className="w-16"
            />
          </Link>
          <div className="w-full flex flex-col justify-around">
            <div className="w-full h-[1px] bg-slate-100 opacity-50"></div>
            <div className="w-full h-[1px] bg-slate-100 opacity-50"></div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
