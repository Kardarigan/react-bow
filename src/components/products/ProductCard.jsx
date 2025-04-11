import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ thing }) => {
  return (
    <div>
      <div>
        <Link>
          <img
            src={thing.covers[0]}
            alt={thing.title + " cover"}
            className="rounded"
          />
        </Link>
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
