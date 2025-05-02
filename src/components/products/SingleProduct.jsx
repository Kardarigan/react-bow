import React from "react";
import { ProductInfo } from "..";
import { useParams } from "react-router-dom";
import { Products } from "../../data/Products";

const SingleProduct = () => {
  const { product } = useParams();
  const path = product.split("-").join(" ");
  const { title, author, price, covers } = Products.find(
    (e) => e && e.title === path
  );
  const countButtonClass = " size-5 bg-slate-50";

  return (
    <main className="case flex gap-5">
      <section>
        <img src={covers[0]} alt={title} className="rounded-2xl" />
        <div>
          <div className="bg-slate-200">
            <button className={countButtonClass}>
              <i class="fa-solid fa-plus text-green-400"></i>
            </button>
            <span>1</span>
            <button className={countButtonClass}>
              <i class="fa-solid fa-minus text-red-400"></i>
            </button>
          </div>
          <h3>
            <span className="title">{price}</span> تومان
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
