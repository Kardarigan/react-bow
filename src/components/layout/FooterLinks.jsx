import React from "react";
import { AccessLinks, Brands, MainContactInfo } from "../../data/Constants";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  const footLinks = [
    {
      title: "دسترسی های سایت",
      links: AccessLinks,
    },
    {
      title: "منتشرین منتخب",
      links: Brands,
    },
  ];

  return (
    <div className="grid gap-8 grid-cols-12 mt-12">
      {footLinks.map((item, index) => {
        return (
          <div className="col-span-2 mt-2">
            <div className="flex-seperate">
              <h3>{item.title}</h3>
              <div className="w-1/4 h-[1px] bg-slate-100 opacity-50"></div>
            </div>
            <ul className={`${index === 1 ? "columns-2 " : ""} + para mt-7`}>
              {item.links.map(({ label, href }, index) => {
                return (
                  <li key={index} className={index >= 9 && "text-end"}>
                    <Link to={href}>{label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div className="col-span-3">
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
        <p className="para mt-5">
          بوکتاب در سال ۱۴۰۰ با هدف ارائه جامع‌ترین مجموعه کتاب‌های چاپی و
          دیجیتال تأسیس شد. این پلتفرم، طیف گسترده‌ای از کتاب‌های دانشگاهی،
          کمک‌درسی، عمومی، کودک و نوجوان، و زبان را پوشش می‌دهد و با ناشران
          معتبری مانند چشمه، هرمس، گاج، خیلی سبز، و نشر نو همکاری دارد. بوکتاب
          نه‌تنها نیاز دانشجویان و دانش‌آموزان را برطرف می‌کند، بلکه با
          تخفیف‌های ویژه و ارسال سریع، خرید کتاب را آسان و مقرون‌به‌صرفه کرده
          است. علاوه بر این، پشتیبانی ۲۴ ساعته و امکان خرید اقساطی، تجربه‌ای
          بینظیر برای کتابدوستان فراهم می‌آورد. بوکتاب، مرجع کامل برای همه
          کتابخوان‌های ایران است!
        </p>
      </div>
      <div className="col-span-5">
        <div className="flex-seperate">
          <h3>کجا هستیم و چگونه اعتماد کنید به بُوکتاب</h3>
          <div className="w-1/4 h-[1px] bg-slate-100 opacity-50"></div>
        </div>
        <ul className="para-sm">
          {MainContactInfo.map(({ label, describe, href }, index) => {
            return (
              <li className="flex-seperate mt-7">
                <h6>{label}</h6>
                <Link to={href}>{describe}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
