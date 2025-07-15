import React from "react";
import Breadcrumb from "../utilities/Breadcrumb";
import { PublishersInfo } from "../../data/Constants";

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

  const relating_labels = [
    'انتشارات',
    'از دسته بندی',
    'نوشته‌ی'
  ]

  const benefits = [
    {
      label: 'آماده‌ی ارسال',
      icon: 'fas fa-location-dot'
    }, {
      label: 'ارسال رایگان',
      icon: 'fas fa-truck-fast'
    }, {
      label: 'تضمین کیفیت',
      icon: 'fas fa-badge-check'
    }
  ]

  return (
    <section className="w-full">
      <Breadcrumb />
      <hr className="w-full" />
      <div className="flex-seperate mt-5">
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
      <div className="grid md:grid-cols-3 grid-cols-3 gap-8 md:mt-8 mt-5">
        <ul className="xl:block md:flex-seperate block max-xl:col-span-3 gap-5">
          {
            info.slice(0, 3).map((item, idx) => {
              return (
                <li className={`flex-seperate py-2 ${idx !== 2 ? 'border-b' : 'max-xl:border-b'} xl:w-full md:w-1/3`}>
                  <h6 className="text-slate-500">{item.label}</h6>
                  <h5>{item.detail}</h5>
                </li>
              )
            })
          }
        </ul>
        <p className="text-justify leading-relaxed xl:col-span-1 md:col-span-2 col-span-3">{intro}</p>
        <ul className="md:col-span-1 col-span-3">
          {
            relatings.map((item, idx) => {
              let publisherLogo = null;
              if (idx === 0) {
                const thePublisher = PublishersInfo.find(
                  (e) => e && e.name === item
                );
                if (thePublisher) {
                  publisherLogo = (
                    <img src={thePublisher.logo} alt={item} className="w-6 h-6 me-2 mb-1" />
                  );
                }
              } return (
                <li key={idx} className={`py-5 border-t ${idx === 0 ? 'xl:border-t-0' : ''} border-slate-300`}>
                  <a href="#" className="flex items-center group">
                    {publisherLogo}
                    {relating_labels[idx]} {' '}
                    {item}
                    <i className="fas fa-chevron-left group-hover:text-rose-500 ms-5" />
                  </a>
                </li>
              );
            })

          }
        </ul>
      </div>
      <div className="flex-seperate gap-x-3 border border-rose-500 p-5 rounded-3xl mt-8 lg:float-left">
        {benefits.map((item, idx) => {
          return (
            <>
              <div className="flex-seperate w-1/3">
                <h5 className="text-slate-600 text-sm font-thin whitespace-nowrap">{item.label}</h5>
                <i className={item.icon + ' text-rose-500 ms-5'}></i>
              </div>
              {idx != 2 ?
                <i className="fa-solid fa-horizontal-rule rotate-90 text-rose-400"></i> : ''}
            </>
          )
        })}
      </div>
    </section>
  );
};

export default ProductInfo;
