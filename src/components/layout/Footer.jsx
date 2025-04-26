import React from "react";
import { Logo } from "../../data/Constants";
import { Updates } from "..";

const Footer = () => {
  return (
    <footer className="bg-slate-700 mo text-slate-100">
      <section className="text-center">
        <div className="inline-block p-3 bg-slate-700 shadow-md shadow-slate-800 rounded-full -translate-y-4">
          <img src={Logo.icon} alt="logo" className="size-8 rotate-6" />
        </div>
      </section>
      <section className="flex-seperate">
        <div>
          <Updates />
          <button
            className={
              "button-outline-rose rounded-xl backdrop-filter-none title-sm w-10 h-12 displayTrans visible opacity-100"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            <i className="fa-solid fa-chevron-up mt-1" />
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
