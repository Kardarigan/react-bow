import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductsSort from './ProductsSort';
import { Products } from '../../data/Products';


const Feed = () => {
  const [products, setProducts] = useState(Products);
  const [sortedProducts, setSortedProducts] = useState(Products);

  useEffect(() => {
    setSortedProducts(products); // in case you fetch products async
  }, [products]);

  return (
    <div className="px-4 py-6">
      <ProductsSort products={products} onSort={setSortedProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {sortedProducts.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Feed;