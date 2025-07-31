import React from "react";
import { Link } from "react-router-dom";
import {
  AccessLinks,
  Badges,
  Brands,
  MainContactInfo,
} from "../../data/Constants";

const FooterLinks = () => {
  const footLinks = [
    { title: "دسترسی های سایت", links: AccessLinks },
    { title: "منتشرین منتخب", links: Brands },
  ];

  const renderLinkSection = ({ title, links }, index) => (
    <div key={title} className="lg:col-span-2 col-span-6 mt-2">
      <div className="flex-seperate">
        <h3>{title}</h3>
        <div className="w-1/4 h-[1px] bg-slate-100 opacity-50" />
      </div>
      <ul className={`${index === 1 ? "columns-2" : ""} para mt-7`}>
        {links.map(({ label, href }, i) => (
          <li key={i} className={i >= 9 ? "text-end" : ""}>
            <Link
              to={href}
              className="hover:bg-rose-500 transition-all rounded-full"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderBrandInfo = () => (
    <div className="lg:col-span-3 md:col-span-4 col-span-12 max-lg:order-last">
      <div className="flex-seperate">
        <h3 className="title">
          <span className="text-rose-500">بُو</span>کتاب
        </h3>
        <div className="para">
          <p>
            برای کتــاب خونا
            <br />
            bowketab.com
          </p>
        </div>
      </div>
      <p className="para mt-5 text-slate-100">
        بوکتاب در سال ۱۴۰۰ با هدف ارائه جامع‌ترین مجموعه کتاب‌های چاپی و دیجیتال
        تأسیس شد. این پلتفرم، طیف گسترده‌ای از کتاب‌های دانشگاهی، کمک‌درسی،
        عمومی، کودک و نوجوان، و زبان را پوشش می‌دهد...
      </p>
    </div>
  );

  const renderContactInfo = () => (
    <div className="lg:col-span-5 md:col-span-8 col-span-12">
      <div className="flex-seperate">
        <h3>کجا هستیم و چگونه اعتماد کنید به بُوکتاب</h3>
        <div className="w-1/4 h-[1px] bg-slate-100 opacity-50" />
      </div>
      <ul className="para-sm">
        {MainContactInfo.map(({ label, describe, href }, index) => (
          <li key={label} className="flex-seperate mt-7">
            <h6>{label}</h6>
            <h4 className={index === 1 ? "title-sm text-rose-500" : ""}>
              <Link to={href}>{describe}</Link>
            </h4>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-5 gap-3 mt-8">
        {Badges.map((item, index) => (
          <BadgeItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );

  const BadgeItem = ({ item, index }) => {
    const isTrust = index === 2;
    return (
      <div
        className={`${isTrust ? "row-span-2 flex-col" : "col-span-2"} 
        px-3 py-4 flex-center gap-3 rounded-2xl bg-slate-900`}
      >
        {isTrust ? (
          item.icons.map(({ icon, href }, i) => (
            <Link key={i} to={href}>
              <img src={icon} alt="Trust Badge" />
            </Link>
          ))
        ) : (
          <>
            <i className={`${item.icon} text-rose-500 lg:text-lg`} />
            <h6 className="lg:text-[8px] text-sm">{item.label}</h6>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="grid gap-8 grid-cols-12 mt-12">
      {footLinks.map(renderLinkSection)}
      {renderBrandInfo()}
      {renderContactInfo()}
    </div>
  );
};

export default FooterLinks;
