import Link from "next/link";

export default function AboutTwo() {
  return (
    <>
      <section className="about-area-two pt-110 pb-120">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7 col-md-9 order-0 order-lg-2">
              <div className="about-img-two">
                <div className="main-img">
                  <img src="/assets/img/aboutus/1.jpg" alt="" />
                </div>
                <img src="/assets/img/aboutus/2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-content-two">
                <div className="section-title mb-30 tg-heading-subheading animation-style2">
                  <span className="sub-title tg-element-title">Who We are</span>
                  <h2 className="title tg-element-title">
                    Excellence in Advanced Surgery and Pain Management
                  </h2>
                </div>
                <p>
                  Our clinic excels in delivering top-tier medical care,
                  specializing in Anesthesiology, General Surgery, Orthopedic
                  Surgery, ENT, and Pain Management. We prioritize patient
                  well-being and cutting-edge treatment approaches
                </p>
                <div className="about-list">
                  <ul className="list-wrap w-full">
                    <li>
                      <img src="/assets/img/icons/check_icon.svg" alt="" />
                      Anesthesiology Expert Care
                    </li>
                    <li>
                      <img src="/assets/img/icons/check_icon.svg" alt="" />
                      Precision in General Surgery
                    </li>
                    <li>
                      <img src="/assets/img/icons/check_icon.svg" alt="" />
                      Orthopedic Surgery Specialists
                    </li>
                    <li>
                      <img src="/assets/img/icons/check_icon.svg" alt="" />
                      Advanced ENT Procedures
                    </li>
                    <li>
                      <img src="/assets/img/icons/check_icon.svg" alt="" />
                      Comprehensive Pain Management
                    </li><li>
                      <img src="/assets/img/icons/check_icon.svg" alt="" />
                      Patient-Centered Healthcare Approach
                    </li>
                  </ul>
                </div>
                <Link href="/about" className="btn transparent-btn">
                  Get Started With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-wrap">
          <img src="/assets/img/images/about_shape01.png" alt="" />
          <img src="/assets/img/images/about_shape02.png" alt="" />
        </div>
      </section>
    </>
  );
}
