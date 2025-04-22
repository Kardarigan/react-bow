import {
  Banner,
  Carousel,
  CategorySection,
  Hero,
  ProductSection,
  Publishers,
} from "..";
import { Products } from "../../data/Products";
import { Banners, Logo } from "../../data/Constants";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      <Publishers />
      <ProductSection title="جدیدترین محصولات" products={Products} />
      <Banner cover={Banners[0].cover} href={Banners[0].href} />
      <ProductSection title="محبوبترین انتشارات" products={Products} />
      <CategorySection />
      <section className="container bg-slate-100 px-12 py-8 mo rounded-3xl">
        <div className="flex-seperate mb-5">
          <div className="flex-center gap-1">
            <img src={Logo.icon} alt="logo" className="w-10" />
            <h3>نشر انتحصاری کمان</h3>
          </div>
          <Link>
            مشاهده‌ی تمام همه <i className="fa-solid fa-arrow-left ms-2 tail" />
          </Link>
        </div>
        <Carousel
          type="product"
          things={Products}
          options={{
            perMove: 1,
            type: "loop",
            arrows: false,
            autoplay: true,
            pagination: false,
            gap: "1em",
            perPage: 4,
            breakpoints: {
              1200: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
            },
          }}
        />
      </section>
    </>
  );
};

export default Home;
