import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ thing }) => {
  return (
    <div
      className="w-96 p-3 bg-slate-100 rounded-xl shadow-md my-3 group overflow-hidden"
      dir="rtl"
    >
      <div className="h-48 overflow-hidden rounded-2xl relative">
        <Link>
          <img
            src={thing?.covers?.[0]}
            alt={thing?.title + " cover"}
            className="size-full bg-fullobject"
          />
          <div className="size-full absolute inset-0 flex-center">
            <div className="border-2 border-slate-100 size-[90%] rounded-2xl text-sm">
              <div className="pt-2 px-3 pb-1 text-slate-200 bg-slate-800 inline-block rounded-2xl">
                <span>{thing?.time}:00</span>
                <i className="fa-solid fa-timer ms-1 text-rose-400"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full flex-center pt-5 gap-x-5">
        <Link>
          <h3 className="title-sm text-start line-clamp-3">{thing?.title}</h3>
        </Link>
        <p className="line-clamp-4 para leading-5">
          {thing?.article?.[0]?.paragraphs?.[0]}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
