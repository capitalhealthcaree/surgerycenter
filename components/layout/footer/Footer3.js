import Link from "next/link"

export default function Footer3() {
    return (
        <>
            <footer>
                <div className="footer-area-three">
                    <div className="footer-top-three">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <div className="fw-logo">
                                            <Link href="/"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                        </div>
                                        <div className="footer-content">
                                            <p>Our clinic excels in delivering top-tier medical care,
                  specializing in Anesthesiology, General Surgery, Orthopedic
                  Surgery, ENT, and Pain Management. We prioritize patient
                  well-being and cutting-edge treatment approaches</p>
                                            <div className="footer-social footer-social-three">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Menu</h4>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/anesthesiology/">Anesthesiology</Link></li>
                                                <li><Link href="/general-surgery/">General Surgery</Link></li>
                                                <li><Link href="/orthopedic-surgery/">Orthopedic Surgery</Link></li>
                                                <li><Link href="/otorhinolaryngology-ent/">Otorhinolaryngology</Link></li>
                                                <li><Link href="/pain-management/">Pain Management</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Quick Links</h4>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/patient-resources/">Patient Resources</Link></li>
                                                <li><Link href="/appointment/">Get Appointment</Link></li>
                                                <li><Link href="/about/">About Us</Link></li>
                                                <li><Link href="/blogs/">Blogs</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-7">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Contact</h4>
                                        <div className="footer-info">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <p>58 Street Commercial Road Fratton, Australia</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        <Link href="tel:0123456789">+123 888 9999</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-clock" />
                                                    </div>
                                                    <div className="content">
                                                        <p>Mon – Fri: 9 am – 5 pm, <br />Sat, Sunday: <span>CLOSED</span></p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-three">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text-two text-center">
                                        <p>Copyright © gerow | All Right Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
