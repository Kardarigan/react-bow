import { useState, useEffect } from "react";
import { ProductCard, ProductsSort, useWindowWidth } from "..";
import { Products } from "../../data/Products";

const Feed = () => {
  const [products, setProducts] = useState(Products);
  const [sortedProducts, setSortedProducts] = useState(Products);
  const screenWidth = useWindowWidth();

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  return (
    <section>
      <ProductsSort products={products} onSort={setSortedProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 mt-6">
        {sortedProducts.map((product, idx) => {
          const index = idx + 1;
          let isLastItem = false;

          if (screenWidth >= 1024) {
            if (index % 4 === 0) {
              isLastItem = true;
            }
          } else if (screenWidth >= 768 && screenWidth < 1024) {
            if (index % 3 === 0) {
              isLastItem = true;
            }
          } else if (screenWidth < 768) {
            if (index % 2 === 0) {
              isLastItem = true;
            }
          }

          return (
            <div className="flex" key={product.id || idx}>
              <ProductCard product={product} feed={true} />
              <div
                className={`border-2 border-rose-300 mx-5 ${
                  isLastItem ? "hidden" : ""
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feed;
