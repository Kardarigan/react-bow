import { ProductCard, useWindowWidth } from "..";

const ProductsFeed = ({ products }) => {
  const screenWidth = useWindowWidth();

  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 mt-6">
      {products.map((product, idx) => {
        const index = idx + 1;
        let isLastItem = false;

        if (screenWidth >= 1024 && index % 4 === 0) isLastItem = true;
        else if (screenWidth >= 768 && screenWidth < 1024 && index % 3 === 0)
          isLastItem = true;
        else if (screenWidth < 768 && index % 2 === 0) isLastItem = true;

        return (
          <div className="flex" key={product.id || idx}>
            <ProductCard product={product} feed={true} />
            <div
              className={`border-2 border-rose-300 mx-5 ${
                isLastItem ? "hidden" : ""
              }`}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ProductsFeed;
