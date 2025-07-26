import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductsSort from "./ProductsSort";
import { Products } from "../../data/Products";

const Feed = () => {
  const [products, setProducts] = useState(Products);
  const [sortedProducts, setSortedProducts] = useState(Products);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  return (
    <section>
      <ProductsSort products={products} onSort={setSortedProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 mt-6">
        {sortedProducts.map((product, idx) => {
          const index = idx + 1; // 1-based index for easier modulo calculations

          let dividerClasses = "";

          // Check if it's the last item in a row for different breakpoints
          // These classes will hide the divider at the specified breakpoint
          if (index % 4 === 0) {
            dividerClasses = "lg:hidden ";
          } else if (index % 3 === 0) {
            // Apply md:hidden if it's the last in a 3-column row, but not if it's already hidden by lg:hidden
            dividerClasses = "md:hidden";
          } else if (index % 2 === 0) {
            // Apply sm:hidden if it's the last in a 2-column row, but not if already hidden by md:hidden or lg:hidden
            dividerClasses = "sm:hidden";
          }

          return (
            <div className="flex" key={product.id || idx}>
              {" "}
              <ProductCard product={product} feed={true} />
              <div
                className={`border-2 border-rose-300 mx-5 ${dividerClasses}`}
              ></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feed;
