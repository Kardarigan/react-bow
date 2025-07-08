import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ thing }) => {
  const formattedTitle = thing.title.replace(/\s+/g, "-");
  const path = "/product/" + formattedTitle;
  var formattedPrice = thing.price
    ? thing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : null;


  return (
    <div
      className="w-64 p-3 bg-slate-100 rounded-xl shadow-md my-3 group"
      dir="rtl"
    >
      <div className="h-72 overflow-hidden rounded-2xl">
        <Link to={path}>
          <img
            src={thing.covers[0]}
            alt={thing.title + " cover"}
            className="size-full bg-fullobject"
          />
        </Link>
      </div>
      <div className="w-full">
        <Link to={path}>
          <h3 className="py-3 title-sm text-start line-clamp-2">
            {thing.title}
          </h3>
        </Link>
        <div className="bg-gradient-to-r from-slate-500 to-transparent opacity-50 h-[2px] w-2/5 mr-auto"></div>
        <div className="flex-seperate items-end">
          <button className="button button-rose p-0 pt-1 size-10 text-lg group-hover:bg-slate-800">
            <i className="fa-solid fa-plus transition-all -translate-x-[5px] -translate-y-[5px] group-hover:translate-x-0 group-hover:translate-y-0 text-slate-900 group-hover:text-slate-50" />
          </button>
          <h4 className="text-sm flex items-center">
            <span className="text-2xl me-2">{formattedPrice}</span>تومان
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
