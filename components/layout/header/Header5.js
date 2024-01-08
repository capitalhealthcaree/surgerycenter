import Link from "next/link"
import MobileMenu from "../MobileMenu"
import SearchPopup from "../SearchPopup"

export default function Header5({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffcanvus, handleOffcanvus }) {
    return (
        <>
            <header className="transparent-header">
                <div className="heder-top-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="header-top-left">
                                    <ul className="list-wrap">
                                        <li><i className="flaticon-location" />256 Avenue, Mark Street, Newyork City</li>
                                        <li><i className="flaticon-mail" /><Link href="mailto:admin@advancedcaresurgerycenter.com">admin@advancedcaresurgerycenter.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="header-top-right">
                                    <div className="header-contact">
                                        <Link href="tel:0123456789"><i className="flaticon-phone-call" />+123 8989 444</Link>
                                    </div>
                                    <div className="header-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" style={{ maxHeight: "40px" }}/></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                            <li><Link href="/">Home</Link></li>
                                                <li className="active menu-item-has-children"><Link href="/medical-procedures">Medical Procedures</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/anesthesiology/">Anesthesiology</Link></li>
                                                        <li><Link href="/general-surgery/">General Surgery</Link></li>
                                                        <li><Link href="/orthopedic-surgery/">Orthopedic Surgery</Link></li>
                                                        <li><Link href="/otorhinolaryngology-ent/">Otorhinolaryngology (ENT)</Link></li>
                                                        <li><Link href="/pain-management/">Pain Management</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/contact">Patient Resources</Link></li>
                                                <li><Link href="/about/">About Us</Link></li>
                                                <li><Link href="/blogs">Blogs</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul className="list-wrap">
                                                <li className="header-btn"><Link href="/appointment/" className="btn btn-two">Get a Appointment</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
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
    )
}
