import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ thing }) => {
  return (
    <div className="w-64 p-3 bg-slate-100 rounded-xl" dir="rtl">
      <Link>
        <img src={thing.cover} alt={"کاور دسته بندی " + thing.title} />
        <div>
          <h2 className="text-center">{thing.title}</h2>
          <span className="tail">مشاهده‌ی کتاب‌ها</span>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
