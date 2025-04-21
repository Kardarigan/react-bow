import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ thing }) => {
  return (
    <div className="w-64 p-3 bg-slate-100 rounded-xl" dir="rtl">
      <Link>
        <img
          src={thing.cover}
          alt={"کاور دسته بندی " + thing.title}
          className="rounded-xl"
        />
        <div className="flex-seperate py-3">
          <h2 className="text-center title-sm">{thing.title}</h2>
          <span className="link para">مشاهده‌ی کتاب‌ها</span>
        </div>
        <p className="para line-clamp-2 opacity-35">{thing.description}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
