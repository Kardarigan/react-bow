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
            <span className="title-sm">{amount}</span>
            <button className={countButtonClass} onClick={() => setAmount(prev => (prev > 1 ? prev - 1 : 1))}>
              <i className="fa-solid fa-minus text-red-400"></i>
            </button>
          </div>
          <h3 className="flex items-center gap-1">
            <span className="title">{formattedPrice}</span> تومان
          </h3>
        </div>
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
