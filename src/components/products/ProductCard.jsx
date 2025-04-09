import React from "react";

const ProductCard = ({ thing }) => {
  return (
    <div>
      <div>
        <img src={thing.cover} alt={thing.title + " cover"} />
      </div>
      <div>
        <h3>{thing.title}</h3>
      </div>
      <div>
        <h4>{thing.price} تومان</h4>
        <button>
          <i className="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
