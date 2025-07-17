import React, { useState } from "react";
import {
  Drawer, ProductInfo
} from "..";
import { useParams } from "react-router-dom";
import { Products } from "../../data/Products";


const SingleProduct = () => {
  const { product } = useParams();
  const path = product.split("-").join(" ");
  const theProduct = Products.find(
    (e) => e && e.title === path
  );



  const countButtonClass = " px-[7px] pt-1 bg-slate-50 rounded-lg";
  const [amount, setAmount] = useState(1)

  var formattedPrice = theProduct.price
    ? theProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : null;

  return (
    <div className="case flex max-xl:flex-col gap-5 relative">
      <aside className="sticky top-1">
        <section className="flex max-xl:flex-center xl:flex-col max-md:flex-col gap-8">
          <img src={theProduct.covers[0]} alt={theProduct.title} className="w-72 h-96 object-cover rounded-2xl" />
          <div className="max-md:w-full">
            <div className="flex-seperate max-md:flex-col-reverse gap-3">
              <div className="bg-slate-200 p-2 rounded-2xl flex items-center max-md:justify-between gap-x-2 max-md:w-full">
                <button className={countButtonClass} onClick={() => setAmount(prev => prev + 1)}>
                  <i className="fa-solid fa-plus text-green-400"></i>
                </button>
                <div className="min-w-2 relative"><span className="title-sm absolute -top-3">{amount}</span></div>
                <button className={countButtonClass} onClick={() => setAmount(prev => (prev > 1 ? prev - 1 : 1))}>
                  <i className="fa-solid fa-minus text-red-400"></i>
                </button>
              </div>
              <div className="flex-seperate w-full">
                <h6 className="md:hidden">
                  قیمت محصول:
                </h6>
                <h3 className="flex items-center gap-1">
                  <span className="title">{formattedPrice}</span> تومان
                </h3>
              </div>
            </div>
            <button className="button button-dark title-sm mt-5 py-5 flex justify-center items-center gap-1 font-extrabold w-full">
              <i className="fa-solid fa-plus text-green-400"></i>
              به سبد خرید
            </button>
          </div>
        </section>
      </aside>
      <main>
        <ProductInfo
          product={theProduct}
        />
        <section className="clear-both pt-1">
          <Drawer product={theProduct} />
        </section>
      </main>
    </div>
  );
};

export default SingleProduct;
