import { useState, useEffect } from "react";
import { ProductsSort, ProductsFeed } from "..";
import { Products } from "../../data/Products";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const { category } = useParams();

  const [products, setProducts] = useState(Products);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    setSortedProducts(Products);
  }, []);

  return (
    <div className="case flex gap-5 relative">
      <aside></aside>
      <main>
        <header className="flex md:items-center max-md:flex-col gap-12">
          <h1 className="title-lg">
            {category == null ? (
              "فروشگاه بُو کتاب"
            ) : (
              <>
                خرید کتاب
                <br />
                {category}
              </>
            )}
          </h1>
          <ProductsSort products={products} onSort={setSortedProducts} />
        </header>
        <ProductsFeed products={sortedProducts} />
      </main>
    </div>
  );
};

export default ProductsPage;
