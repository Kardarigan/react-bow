import { Banner, CategorySection, Hero, ProductSection, Publishers } from "..";
import { Products } from "../../data/Products";
import { Banners } from "../../data/Constants";

const Home = () => {
  return (
    <>
      <Hero />
      <Publishers />
      <ProductSection title="جدیدترین محصولات" products={Products} />
      <Banner cover={Banners[0].cover} href={Banners[0].href} />
      <CategorySection />
    </>
  );
};

export default Home;
