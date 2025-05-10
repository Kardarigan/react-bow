import React, { useState } from "react";
import { ProductInfo } from "..";
import { useParams } from "react-router-dom";
import { Products } from "../../data/Products";

const SingleProduct = () => {
  const { product } = useParams();
  const path = product.split("-").join(" ");
  const { title, author, price, covers } = Products.find(
    (e) => e && e.title === path
  );
  var formattedPrice = price
    ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : null;

  const countButtonClass = " px-[7px] pt-1 bg-slate-50 rounded-lg";
  const [amount, setAmount] = useState(1)

  return (
    <main className="case flex gap-5">
      <section>
        <img src={covers[0]} alt={title} className="rounded-2xl" />
        <div className="flex-seperate gap-3 mt-8">
          <div className="bg-slate-200 p-2 rounded-2xl flex items-center gap-x-2">
            <button className={countButtonClass} onClick={() => setAmount(prev => prev + 1)}>
              <i className="fa-solid fa-plus text-green-400"></i>
            </button>
            <div className="min-w-2 relative"><span className="title-sm absolute -top-3">{amount}</span></div>
            <button className={countButtonClass} onClick={() => setAmount(prev => (prev > 1 ? prev - 1 : 1))}>
              <i className="fa-solid fa-minus text-red-400"></i>
            </button>
          </div>
          <h3 className="flex items-center gap-1">
            <span className="title">{formattedPrice}</span> تومان
          </h3>
        </div>
        <button className="button button-dark title-sm mt-8 py-5 flex justify-center items-center gap-1 font-extrabold w-full">
          <i className="fa-solid fa-plus text-green-400"></i>
          به سبد خرید
        </button>
      </section>
      <ProductInfo
        title={title}
        author={author}
        price={price}
        cover={covers[0]}
      />
    </main>
  );
};

export default SingleProduct;
