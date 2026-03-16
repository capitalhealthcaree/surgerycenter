import Link from "next/link";
import MobileMenu from "../MobileMenu";
import SearchPopup from "../SearchPopup";

export default function Header6({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
  isOffcanvus,
  handleOffcanvus,
}) {
  return (
    <>
      <div id="header-fixed-height" className={scroll ? "active-height" : ""} />
      <header className="header-style-six">
        <div className="heder-top-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>
                      <i
                        className="flaticon-location"
                        style={{ color: "#ff0805" }}
                      />
                      <a
                        href="https://maps.app.goo.gl/cSS2PJeDEEvMGoh16"
                        target="_blank"
                      >
                        2200 Physicians Blvd, Ennis, TX 75119
                      </a>
                    </li>
                    <li>
                      <i
                        className="flaticon-mail"
                        style={{ color: "#ff0805" }}
                      />
                      <Link href="mailto:admin@advancedcaresurgerycenter.com">
                        admin@advancedcaresurgerycenter.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="header-top-right">
                  <div className="header-contact">
                    <Link href="tel:972-782-9090">
                      <i
                        className="flaticon-phone-call"
                        style={{ color: "#ff0805" }}
                      />
                      972-782-9090
                    </Link>
                  </div>
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="https://www.facebook.com/advancedcaresurgerycenter/">
                          <i
                            className="fab fa-facebook-f"
                            style={{ color: "#ff0805" }}
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/company/advancedcare-surgery-center/">
                          <i
                            className="fab fa-linkedin"
                            style={{ color: "#ff0805" }}
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sticky-header"
          className={`menu-area ${scroll ? "sticky-menu" : ""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/conditions-we-treat">Conditions</Link>
                        </li>
                        <li>
                          <Link href="/surgical-procedures">Procedures</Link>
                        </li>
                        <li>
                          <Link href="/about/">About Us</Link>
                        </li>
                        <li>
                          <Link href="/blogs">Blogs</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-btn">
                          <Link href="/appointment/" className="btn btn-two">
                            Get a Appointment
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <MobileMenu />
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" onClick={handleMobileMenu} />
              </div>
            </div>
          </div>
        </div>
        <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
      </header>
    </>
  );
}
