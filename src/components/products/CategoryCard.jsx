import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ thing }) => {
  const href = '/products/' + thing.label
  console.log(href);
  
  return (
    <div className="w-64 p-3 bg-slate-100 rounded-xl" dir="rtl">
      <Link to={href}>
        <img
          src={thing.cover}
          alt={"کاور دسته بندی " + thing.label}
          className="rounded-xl"
        />
        <div className="flex-seperate py-3">
          <h2 className="text-center title-sm">{thing.label}</h2>
          <span className="link para">مشاهده‌ی کتاب‌ها</span>
        </div>
        <p className="para line-clamp-2 opacity-35">{thing.description}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
