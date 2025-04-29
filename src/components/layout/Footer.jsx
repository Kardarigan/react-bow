import React from "react";
import { Logo } from "../../data/Constants";
import { Updates, FooterLinks } from "..";

const Footer = () => {
  return (
    <footer className="bg-slate-700 mo text-slate-100">
      <section className="text-center">
        <div className="inline-block p-3 bg-slate-700 shadow-md shadow-slate-800 rounded-full -translate-y-4">
          <img src={Logo.icon} alt="logo" className="size-8 rotate-6" />
        </div>
      </section>
      <section className="case mt-0">
        <div className="flex-seperate">
          <div className="w-80">
            <Updates />
          </div>
          <div className="flex gap-5">
            <button
              className={
                "button-outline-rose rounded-xl backdrop-filter-none title-sm w-10 h-12"
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
          <div className="w-80" dir="ltr">
            <Updates />
          </div>
        </div>
        <FooterLinks />
      </section>
    </footer>
  );
};

export default Footer;
