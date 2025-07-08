import React from "react";
import Breadcrumb from "../utilities/Breadcrumb";

const ProductInfo = ({ product }) => {

  const {
    title,
    author,
    price,
    rate,
    category,
    covers,
    publisher,
    isbn,
    intro,
    summary,
    cover,
    year
  } = product

  const info = [
    {
      label: 'نویسنده',
      detail: author
    },
    {
      label: 'ناشر',
      detail: publisher
    },
    {
      label: 'جلد',
      detail: cover
    },
    {
      label: 'شابک',
      detail: isbn
    },
    {
      label: 'امتیاز از 5',
      detail: isbn
    },
  ]

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

  const relatings = [
    publisher,
    category,
    author
  ]

  return (
    <section className="w-full">
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
      <div className="grid md:grid-cols-2 xl:grid-cols-3 md:mt-8 mt-5">
        <ul className="">
          {
            info.slice(0, 3).map((item, idx) => {
              return (
                <li className={`flex-seperate py-2 ${idx !== 2 ? 'border-b' : 'max-lg:border-b'}`}>
                  <h6 className="text-slate-500">{item.label}</h6>
                  <h5>{item.detail}</h5>
                </li>
              )
            })
          }
        </ul>
        <p className="text-justify leading-relaxed">{intro}</p>
        <div></div>
      </div>
    </section>
  );
};

export default ProductInfo;
