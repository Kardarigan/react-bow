import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Footer, Header } from "./";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      setLoading(true);
      prevPathname.current = location.pathname;

      window.scrollTo(0, 0);

      const loadTimeout = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(loadTimeout);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div className="relative" id="main">
        <div
          className={`loading ${loading ? "loading-enter" : "loading-exit"}`}
        >
          درحال بارگزاری...
        </div>
        {!loading && <Outlet />}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
