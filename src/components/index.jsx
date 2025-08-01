import Layout from "./Layout";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import FooterLinks from "./layout/FooterLinks";
import Carousel from "./utilities/Carousel";
import Banner from "./utilities/Banner";
import Breadcrumb from "./utilities/Breadcrumb";
import Drawer from "./utilities/drawer";
import IntroTab from "./utilities/drawer/IntroTab";
import ExtraInfoTab from "./utilities/drawer/ExtraInfoTab";
import CommentsTab from "./utilities/drawer/CommentsTab";

// ----------------------------------[Home
import Home from "./home";
import Hero from "./home/Hero";
import Publishers from "./home/Publishers";

// ----------------------------------[Product
import ProductSection from "./products/ProductSection";
import ProductCard from "./products/ProductCard";
import ProductsFeed from "./products/ProductsFeed";
import CategoryCard from "./products/CategoryCard";
import CategorySection from "./products/CategorySection";
import SingleProduct from "./products/SingleProduct";

// ----------------------------------[Products
import ProductsPage from "./products";
import ProductsSort from "./products/ProductsSort";

// ----------------------------------[Blog
import BlogCard from "./blog/BlogCard";
import BlogSection from "./blog/BlogSection";
import Updates from "./utilities/Updates";
import ProductInfo from "./products/ProductInfo";

// ----------------------------------[Hooks
import useWindowWidth from "./hooks/useWindowWidth";

export {
  useWindowWidth,
  Drawer,
  IntroTab,
  ExtraInfoTab,
  CommentsTab,
  Breadcrumb,
  ProductInfo,
  SingleProduct,
  FooterLinks,
  Updates,
  Footer,
  BlogSection,
  BlogCard,
  CategoryCard,
  CategorySection,
  Header,
  Layout,
  Navbar,
  Home,
  Hero,
  Carousel,
  Banner,
  Publishers,
  ProductSection,
  ProductCard,
  ProductsPage,
  ProductsSort,
  ProductsFeed,
};
