import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ thing }) => {
  return (
    <div className="p-3 border-2 border-rose-500" dir="rtl">
      <div className="h-80 overflow-hidden rounded-2xl">
        <Link>
          <img src={thing.covers[0]} alt={thing.title + " cover"} />
        </Link>
      </div>
      <div className="w-full">
        <div className="py-3 title-sm text-start">
          <h3>{thing.title}</h3>
        </div>
        <div className=""></div>
        <div className="flex-seperate">
          <button className="button button-rose">
            <i className="fa-solid fa-plus" />
          </button>
          <h4>
            <span className="title me-2">{thing.price}</span>تومان
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
