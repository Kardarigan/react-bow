import React from "react";
import Breadcrumb from "../utilities/Breadcrumb";

const ProductInfo = ({ title, author, price, rate, cover }) => {

  const controls = [
    {
      icon: 'fa-regular fa-bookmark',
      title: 'افزودن به علاقه مندی',
      function: '',
    },
    {
      icon: 'fa-regular fa-book',
      title: 'معرفی کتاب',
      path: '#into',
    },
    {
      icon: 'fa-solid fa-square-dashed',
      title: 'کپی آدرس صفحه',
      function: '',
    },
  ]

  return (
    <div className="w-full">
      <hr className="w-full" />
      <Breadcrumb />
      <div className="flex-seperate">
        <h6 className="title">
          <span className="mt-1 me-3">{rate}/5</span>
          {[...Array(parseInt(rate))].map((_, idx) => (
            <i className="fa-solid fa-star text-yellow-400" key={idx}></i>
          ))}
        </h6>
        <div className="text-xl flex gap-x-3 text-slate-600">
          {controls.map((btn, idx) => {

            if (btn.path) {
              return (<a href={btn.path} className="hover:scale-150">
                <i className={btn.icon}></i>
              </a>)
            } else {
              return (<button onClick={btn.function} className="hover:scale-150">
                <i className={btn.icon}></i>
              </button>)
            }
          })}
        </div>
      </div>
      <h1 className="title mt-4">{title}</h1>
    </div>
  );
};

export default ProductInfo;
