import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ thing }) => {
  return (
    <div className="w-64 p-3 bg-slate-100 rounded-xl" dir="rtl">
      <div className="h-72 overflow-hidden rounded-2xl">
        <Link>
          <img
            src={thing.covers[0]}
            alt={thing.title + " cover"}
            className="w-full"
          />
        </Link>
      </div>
      <div className="w-full">
        <Link>
          <h3 className="py-3 title-sm text-start line-clamp-2">
            {thing.title}
          </h3>
        </Link>
        <div className="bg-gradient-to-r from-slate-500 to-transparent opacity-50 h-[2px] w-2/5 mr-auto"></div>
        <div className="flex-seperate items-end">
          <button className="button button-rose px-5">
            <i className="fa-solid fa-plus" />
          </button>
          <h4 className="text-sm">
            <span className="text-2xl me-2">{thing.price}</span>تومان
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
