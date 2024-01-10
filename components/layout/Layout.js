import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import PageHead from "./PageHead";
import Footer from "./footer/Footer";
import Header from "./header";

export default function Layout({ headTitle, breadcrumbTitle, children }) {
  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };
  // Search Menu
  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);
  // Moblile Menu
  const [isOffcanvus, setOffcanvus] = useState(false);
  const handleOffcanvus = () => setOffcanvus(!isOffcanvus);

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <PageHead headTitle={headTitle} />
      <DataBg />

      <Header
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
        isSearch={isSearch}
        handleSearch={handleSearch}
        isOffcanvus={isOffcanvus}
        handleOffcanvus={handleOffcanvus}
      />

      <main className="fix">
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {children}
      </main>
      <Footer />

      <BackToTop />
    </>
  );
}
