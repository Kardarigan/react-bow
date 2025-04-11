import { Hero, ProductSection, Publishers } from "..";
import { Products } from "../../data/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <Publishers />
      <ProductSection title="جدیدترین محصولات" products={Products} />
    </>
  );
};

export default Home;
