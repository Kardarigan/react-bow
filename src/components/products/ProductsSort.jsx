import { useState } from "react";
import { SortOptions } from "../../data/Constants";

const ProductsSort = ({ products, onSort }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSort = (index) => {
    setSelectedIndex(index);
    const sortedProducts = SortOptions[index].function(products);
    onSort(sortedProducts);
  };

  return (
    <div className="py-4 max-w-[700px]">
      <h4 className="mb-2 text-sm font-semibold">نمایش بر اساس:</h4>
      <div className="flex flex-wrap gap-4">
        {SortOptions.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleSort(idx)}
            className={`relative text-sm transition-all duration-200 pb-1 
              ${
                idx === selectedIndex ? "text-black font-bold" : "text-gray-500"
              }
            `}
          >
            {item.label}
            {idx === selectedIndex && (
              <span
                className="absolute left-0 bottom-0 w-full h-[2px] bg-black rounded-full"
                style={{ borderRadius: "9999px" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductsSort;
