import React from "react";
import { AccessLinks, brands } from "../../data/Constants";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  const middleIndex = Math.ceil(brands.length / 2);
  const firstHalf = brands.slice(0, middleIndex);
  const secondHalf = brands.slice(middleIndex);

  const footLinks = [
    {
      title: "دسترسی های مهم سایت",
      links: AccessLinks,
    },
    {
      title: "منتشرین منتخب",
      links: firstHalf,
    },
  ];
  return (
    <div className="grid grid-cols-8">
      {footLinks.map((item, index) => {
        return (
          <div className="col-span-1">
            <div className="flex-seperate">
              <h3>{item.title}</h3>
              <div className="w-1/3 h-[1px] bg-slate-100"></div>
            </div>
            <ul>
              {item.links.map(({ label, href }, index) => {
                return (
                  <li key={index}>
                    <Link to={href}>{label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FooterLinks;
